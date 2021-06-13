import React from "react"
// import axios from "axios";
import * as API from "./api";
import {NotificationContext} from "./Notifications";

const AuthContext = React.createContext({username: "default___Value"})
const AuthConsumer = AuthContext.Consumer


export const AuthEnum = Object.freeze({
	  AUTHENTICATED: 1,
	UNAUTHENTICATED: 2,
	PENDING: 3
})

export default class AuthProvider extends React.Component {
	static contextType = NotificationContext
	state = {
		username: null,
		isAuthenticated: AuthEnum.PENDING
	}

	async componentDidMount() { // If the browser has a session stored, the server will see and return the user
		console.log("[auth:componentDidMount:1] Calling 'getCurrentUser'")
		const username = await API.getCurrentUser()
		console.log("[auth:componentDidMount:2] AuthProvider has gotten the username: ", this.state.username)
		if (username)
			this.setState({ username: username, isAuthenticated: AuthEnum.AUTHENTICATED })
		else
			this.setState({ isAuthenticated: AuthEnum.UNAUTHENTICATED })
	}

	signup = async (newUsername, email, password, successCb = () => {}) => {
		console.log("[auth:signup] Received ", newUsername, email, password)

		const res = await API.signup(newUsername, email, password)


		if (res.status !== 200) {
			this.context.createNotification(res.data)
			return null
		}

		successCb()
		this.setState({username: res.data.username, isAuthenticated: AuthEnum.AUTHENTICATED})
		return res.data.username
	}

	login = async (oldUsername, password, successCb = () => {}) => {
		console.debug(`[auth:login] ${oldUsername}, ${password}`)

		const res = await API.login(oldUsername, password)
		console.log("[auth:login] res.status:", res.status)
		if (res.status !== 200) {
			this.context.createNotification(res.data)
			this.setState({isAuthenticated: AuthEnum.UNAUTHENTICATED})
		} else {
			this.setState({username: res.data.username, isAuthenticated: AuthEnum.AUTHENTICATED})
			successCb()
		}

		return res.data.username
	}

	logout = async () => {
		await API.logout()
		this.setState({ username: null, isAuthenticated: AuthEnum.UNAUTHENTICATED })
	}

	isAuthenticated = () => {
		return this.state.username !== null
	}

	render() {
		return (

				<AuthContext.Provider
					value={{
						username: this.state.username,
						signup: this.signup,
						login: this.login,
						logout: this.logout,
						isAuthenticated: this.state.isAuthenticated
					}}
					children={this.props.children}/>
		)
	}
}

export { AuthContext, AuthConsumer }

