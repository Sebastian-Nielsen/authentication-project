import axios from "axios"
import {HOST_URL} from "../Constants";

const fetchAPI = async (url, method="GET", body=null) => {
	try {
		const response = await axios(method, HOST_URL + url, {
			body: body == null ? undefined : body,
			credentials: {withCredentials: true}
		})
		return response.data
	} catch (err) {
		console.log("[fetchApi:ERROR]")
		return err.response
	}
}              //    TODO:  A lot of duplicate code, refactor this

export const getCurrentUser = async () => {
	console.log("[getCurrentUser_1] Sending request now!")
	try {
		const res = await axios.get(HOST_URL + "/loginForm/user", { withCredentials: true })
		console.log("[getCurrentUser_2:good] Response data.username:", res.data.username, typeof(res.data.username))
		return res.data.username
	} catch (err) {
		console.log("[getCurrentUser_2] err msg:", err.message)
		return null
	}
}

export const removeAllUsers = async () => {
try {
		return await axios.get(HOST_URL + "/loginForm/removeAllUsers")
	} catch (err) {
		return err.response
	}
}

export const insertTenUsers = async (cb) => {
try {
		return await axios.get(HOST_URL + "/loginForm/insertTenUsers")
	} catch (err) {
		return err.response
	}
}

export const deleteUser = async (username, cb) => {
	try {
		const res = await axios.post(HOST_URL + "/loginForm/deleteUser",
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
		 return await axios.post(HOST_URL + "/loginForm/login",
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
		const test = HOST_URL + "/loginForm/signup";
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
	return await axios.get(HOST_URL + "/loginForm/logout",
			{ withCredentials: true })
}