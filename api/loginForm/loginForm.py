from flask import Blueprint, request
from flask import jsonify
import pymongo
from flask import Blueprint, request, session
from passlib.hash import pbkdf2_sha256
from .User import User
import random

client = pymongo.MongoClient("mongodb+srv://sebastian:1234@cluster0.xravw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.user
userDataCollection = db["userData"]

loginForm_blueprint = Blueprint('loginForm', __name__)

@loginForm_blueprint.before_request
def make_session_permanent():
	print(">>>>>>>>>>>>>>>>>>>>")
	print("[before_request] session:", session)
	print("<<<<<<<<<<<<<<<<<<<<")
	session.permanent = True

# Routes
@loginForm_blueprint.route("/signup", methods=["POST"])
def signup():
	user = request.get_json(force=False, silent=False, cache=True)
	print()
	print("We received a signup request: " + str(user))
	print()
	if user is None:
		return "bad", 666
	return User().signup(user)

@loginForm_blueprint.route("/login", methods=["POST"])
def login():
	print()
	print("[POST to /login]")
	user = request.get_json(force=False, silent=False, cache=True)
	print(user)
	return User().login(user)

@loginForm_blueprint.route("/logout", methods=["get", "delete"])
def logout():
	print("[get to /signout]")
	print("[get to /signout]")
	print("[get to /signout]")
	print("[get to /signout]")
	print("[get to /signout]")
	print("[get to /signout]")
	print("[get to /signout]")
	return User().logout()

@loginForm_blueprint.route("insertTenUsers")
def insertTenUsers():
	for i in range(10):
		try:
			userDataCollection.insert({"_id": f"bob_{i}", "username": f"bob_{i}", "email": f"bob_{i}@mail.dk", "unecrypted_password": f"{i}", "password": pbkdf2_sha256.encrypt(f"{i}")})
		except:
			pass
	return "ok", 200

@loginForm_blueprint.route("/user")
def current_user():
# 	from time import sleep
# 	sleep(1)
	print()
	print()
	print()
	print("[/user GET]")
	print(session)
	print()
	print()
	print()
	user = User().getUser()
	return user

@loginForm_blueprint.route("/fetchAllDataFromAllUsers")
def fetchAllDataFromAllusers():
	result = userDataCollection.find({}, {'_id':0})
	res = [user for user in result]
	print(res)
	return jsonify(res), 200

@loginForm_blueprint.route("/removeAllUsers")
def removeAllUsers():
	result = userDataCollection.remove({})
	return "ok", 200

@loginForm_blueprint.route("/deleteUser", methods=["post"])
def deleteUser():
	user = request.get_json(force=False, silent=False, cache=True)
	print("Deleting:", user)
	print("Deleting:", user)
	print("Deleting:", user)
	User().delete(user['username'])
	return "okay", 200
# @loginForm.after_request
# 	def after_request():
