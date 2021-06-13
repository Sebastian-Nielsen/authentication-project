import axios from "axios"
const production  = 'https://authentication-react-project.herokuapp.com/';
const development = 'http://localhost:5000';
const hostUrl = (process.env.NODE_ENV === "development" ? development : production );
console.log("-----------------")
console.log("HostUrl:", process.env.NODE_ENV, hostUrl, window.location.origin, process.env)
console.log("-----------------")

const fetchAPI = async (url, method="GET", body=null) => {
	const response = await fetch(hostUrl + url, {
		credentials: {withCredentials: true},
		method,
		body: body == null ? undefined : JSON.stringify(body)
	})
	const json = await response.json();

	if (response.status !== 200)
		console.error(response.message)

	return json
}

export const getCurrentUser = async () => {
	console.log("[getCurrentUser_1] Sending request now!")
	try {
		const res = await axios.get(hostUrl + "/loginForm/user", { withCredentials: true })
		console.log("[getCurrentUser_2:good] Response data.username:", res.data.username, typeof(res.data.username))
		return res.data.username
	} catch (err) {
		console.log("[getCurrentUser_2] err msg:", err.message)
		return null
	}
}

export const removeAllUsers = async () => {
try {
		return await axios.get(hostUrl + "/loginForm/removeAllUsers")
	} catch (err) {
		return err.response
	}
}

export const insertTenUsers = async (cb) => {
try {
		return await axios.get(hostUrl + "/loginForm/insertTenUsers")
	} catch (err) {
		return err.response
	}
}

export const deleteUser = async (username, cb) => {
	try {
		const res = await axios.post(hostUrl + "/loginForm/deleteUser",
				{
					username: username,
				},
				{withCredentials: true}
		)
		cb()
		return res
	} catch (err) {
		return err.response
	}
}

 export const login = async (oldUsername, password) => {
	console.log("[api:login] Sending req with:", oldUsername, password)
	 try {
		 return await axios.post(hostUrl + "/loginForm/login",
				 {
					 username: oldUsername,
					 password: password
				 },
				 {withCredentials: true}
		 )
	 } catch (err) {
		 console.log(err.messages)
		 console.log(err)
		 console.log("[api:login] err message:", err.response.message)
		 console.log("[api:login] err status:", err.response.status)
		 console.log("[api:login] err msg:", err.response.msg)

			return err.response
	 }
}

export const signup = async (username, email, password) => {
	try {
		const test = hostUrl + "/loginForm/signup";
		console.log(test)
		return await axios.post(test, {
					email: email,
					username: username,
					password: password
				},
				{withCredentials: true}
		)
	} catch (err) {
		console.log("err 34595:", err.response)
		return err.response
	}
}
export const logout = async (newUsername, password) => {
	return await axios.get(hostUrl + "/loginForm/logout",
			{ withCredentials: true })
}