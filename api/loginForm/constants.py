from flask import Response
from json import dumps    # Used to convert a json object into a string
RESPONSE_TYPE = {
	"ERROR": {
		"type": "Error",
		"notification_duration": 5000
	},
	"SUCCESS": {
		"type": "Success",
		"notification_duration": 7500
	},
	"NOTICE": {
		"type": "Notice",
		"notification_duration": 2000
	}
}
from flask import jsonify
RESPONSES = {
	"ERR_INCORRECT_PWD_OR_USERNAME": Response(
		dumps({
		"msg": "Incorrect password or username",
		**RESPONSE_TYPE["ERROR"]
		}),
		status=403
	),
	"ERR_USERNAME_IS_ALREADY_REGISTERED": Response(
	dumps({
		"msg": "Username is already registered",
		**RESPONSE_TYPE["ERROR"]
	}),
	status=409
	),
	"ERR_EMAIL_IS_ALREADY_REGISTERED": Response(
	dumps({
		"msg": "Email is already in use",
		**RESPONSE_TYPE["ERROR"]
	}),
	status=409
	)
# 	"NOTICE_PWDS_DO_NOT_MATCH": {
# 		"msg": "Passwords do not match",
# 		**RESPONSE_TYPE["NOTICE"]
# 	}
}

if "__name__" == "__main__":
	print(responses["ERR_EMAIL_IS_ALREADY_REGISTERED"])