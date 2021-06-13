import os
from flask import session
# https://towardsdatascience.com/build-deploy-a-react-flask-app-47a89a5d17d9
from flask import Flask, render_template, jsonify, send_from_directory, request
from flask_cors import CORS #comment this on deployment
from flask_cors import cross_origin

from api.prosa.prosa import prosa_blueprint
from api.loginForm.loginForm import loginForm_blueprint

app = Flask(__name__, static_folder='frontend/build')
app.secret_key = "any_random_key"

app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SESSION_PERMANENT'] = True
CORS(app, supports_credentials=True) #comment this on deployment

# register blueprints
app.register_blueprint(prosa_blueprint,     url_prefix="/prosa")
app.register_blueprint(loginForm_blueprint, url_prefix="/loginForm")

print("--------------------")
print("--------------------")
print("--------------------")
print("Backend Server up and running.")
print("Secret key:", app.secret_key)
print("--------------------")
print("--------------------")
print("--------------------")

@app.before_request
def make_session_permanent():
	print("[app.before_request] session:", session)
	session.permanent = True

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
	print("%%%%%")
	print(f"path: {path}")
	print("%%%%%")
	if path != "" and os.path.exists(app.static_folder + '/' + path):#(app.static_folder + '/').endswith(path):
		print("IF CASE")
		return send_from_directory(app.static_folder, path)
	else:
		print("IF ELSE")
		return send_from_directory(app.static_folder, 'index.html')