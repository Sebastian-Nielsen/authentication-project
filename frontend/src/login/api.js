import axios from "axios"

const fetchAPI = async (url, method="GET", body=null) => {
	const response = await fetch("http://localhost:5000" + url, {
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
		const res = await axios.get("http://localhost:5000/loginForm/user", { withCredentials: true })
		console.log("[getCurrentUser_2:good] Response data.username:", res.data.username, typeof(res.data.username))
		return res.data.username
	} catch (err) {
		console.log("[getCurrentUser_2] err msg:", err.message)
		return null
	}
}

export const removeAllUsers = async () => {
try {
		return await axios.get("http://localhost:5000/loginForm/removeAllUsers",
				{},
				{withCredentials: true}
		)
	} catch (err) {
		return err.response
	}
}

export const insertTenUsers = async (cb) => {
try {
		return await axios.get("http://localhost:5000/loginForm/insertTenUsers",
				{},
				{withCredentials: true}
		)
	} catch (err) {
		return err.response
	}
}

export const deleteUser = async (username, cb) => {
	try {
		console.log("sending request")
		const res = await axios.post("http://localhost:5000/loginForm/deleteUser",
				{
					username: username,
				},
				{withCredentials: true}
		)
		console.log("Got response")
		cb()
		console.log("deleted")
		return res
	} catch (err) {
		return err.response
	}
}

 export const login = async (oldUsername, password) => {
	console.log("[api:login] Sending req with:", oldUsername, password)
	 try {
		 return await axios.post("http://localhost:5000/loginForm/login",
				 {
					 username: oldUsername,
					 password: password
				 },
				 {withCredentials: true}
		 )
	 } catch (err) {
		 console.log("[api:login] err msg:", err.message)
			return err.response
	 }
}

export const signup = async (username, email, password) => {
	try {
		return await axios.post("http://localhost:5000/loginForm/signup",
				{
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
	await axios.get("http://localhost:5000/loginForm/logout",
			{ withCredentials: true })
}