from flask import Blueprint, request, session
from flask import jsonify
from passlib.hash import pbkdf2_sha256
from flask import Response
import uuid, pymongo
from pymongo.errors import DuplicateKeyError
from werkzeug.exceptions import Forbidden, NotFound, UnprocessableEntity

from .constants import RESPONSES

from random import randint

client = pymongo.MongoClient("mongodb+srv://sebastian:1234@cluster0.xravw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.user
userDataCollection = db["userData"]

class User:

	def startSession(self, userData):
		session['sid'] = ''.join(str(randint(0,10)) for _ in range(3))
# 		print("[startSession] userData:", userData)
		del userData['password']
		session['username'] = userData['username']
		userData['headers'] = {}
		userData['headers']['Access-Control-Allow-Credentials'] = 'true'
		print("[signup] new session created")
		return userData, 200

	def login(self, formData):
		from time import sleep
# 		sleep(2)
		print("[login] formData:", formData)

		user = userDataCollection.find_one(formData['username'])


		if user and pbkdf2_sha256.verify(formData['password'], user['password']):
			return self.startSession(user)

		return RESPONSES["ERR_INCORRECT_PWD_OR_USERNAME"]

	def signup(self, user):
# 		userDataCollection.remove({}) # Remove this, FixMe: )=#¤=)(=¤()!
		print(f"[signup] data received: {user}")

		user["unecrypted_password"] = user["password"]
		user["password"] = pbkdf2_sha256.encrypt(user["password"])
		user["_id"] = user["username"] # Set primary key


		if self.__isEmailAlreadyRegistered(user['email']):
			return RESPONSES["ERR_EMAIL_IS_ALREADY_REGISTERED"]

		try:
			userDataCollection.insert(user)  
			print("[signup] User inserted in db")
			return self.startSession(user)

		except DuplicateKeyError as e:
			return RESPONSES["ERR_USERNAME_IS_ALREADY_REGISTERED"]

	def __isEmailAlreadyRegistered(self, email: str) -> bool:
		return userDataCollection.find_one({'email': email}) != None

	def logout(self):
		print("--------------------")
		print("[logout] session data received:", session)
		print("--------------------")
		del session['username']
		if 'username' in session:
			del session['username']
		return "success", 200

	def getUser(self):
		print("[getuser] session: ", session)
		if 'username' not in session:
			return "No valid session exists. Please log in to access this API", 411

		# The user has a valid session, look up the username in the database

		if userDataCollection.find_one(session['username']) is None:
			return "Your session is invalid. Please log out and log back in", 410
		else:
			res = {
				"username": session['username'],
				"headers": {
					"Acess-Control-Allow-Credentials": 'true'
				}
			}
			return res

	def delete(self, username):
		result = userDataCollection.remove(username)

	def __checkPassword(self, pswrd):
		pass


