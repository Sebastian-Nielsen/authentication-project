import axios from "axios";




axios.post("http://localhost:5000/loginForm/signup",
		{
			email: "sebastian@mail.dk",
			username: "sebastian",
			password: "123"
		},
		{withCredentials: true}
)
		.catch(err => {
			// console.log("~~~~~~~")
			// console.log(err)
			// console.log(err.type)
			// console.log("~~~~~~~")
			// console.log(err.response)
			console.log("~~~~~~~")
			console.log(err.response.data)
			console.log("It is of type:", typeof(err.response.data))
			// console.log(err.response.type)
			console.log("~~~~~~~")
		})
