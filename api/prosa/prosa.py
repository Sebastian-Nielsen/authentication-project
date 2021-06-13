from flask import Blueprint, request
from flask import jsonify
from .testp import fetchProsaPosts
import pymongo
import copy

prosa_blueprint = Blueprint('prosa_blueprint', __name__)

client = pymongo.MongoClient("mongodb+srv://sebastian:1234@cluster0.xravw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.prosa

oldPostsCluster = db['oldPostsCluster']
newPostsCluster = db['newPostsCluster']

print(newPostsCluster)

@prosa_blueprint.route("/newPost", methods=["POST"])
def delOldPost():
	print()
	print()
	print( request.get_json(force=False, silent=False, cache=True) )
	print()
	print()
	postToDelete = request.get_json(force=False, silent=False, cache=True)

	res = newPostsCluster.delete_one( postToDelete )
	print()
	print(res)
	print()

	return "test"


@prosa_blueprint.route("/")
def index():
	return {"msg": "hello there"}

@prosa_blueprint.route("/fetch")
def insert():
	for post in fetchProsaPosts():
		print()
		print(post)
		print()
		post["_id"] = copy.deepcopy(post) # compound primary key of all entries
		msg = "success \n asdf"
		try:
			oldPostsCluster.insert(post)
			newPostsCluster.insert(post)
			print(f"There is a new post: '{post['info_title']}'")
			msg += f"There is a new post: '{post['info_title']}'\n"
		except pymongo.errors.DuplicateKeyError as e:
			print(f"{e}\n\n")
	return msg

@prosa_blueprint.route("/newPosts")
def posts():
# 	from time import sleep
# 	sleep(137)
	# Find everything and don't include the '_id' attribute
	newPosts = list( newPostsCluster.find({}, {"_id": 0}) )
	return jsonify( newPosts )





@prosa_blueprint.route("/test")
def test():
	import json
# 	posts.insert({"hell": "asdf"})
	results = posts.find({}, {"_id": 0}).limit(1)
	print(type(results))
	print(results[0])
	return jsonify(results[0])
# 	return fetchProsaPosts()