import React from "react"
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
		const username = await API.getCurrentUser()

		if (username)
			this.setState({ username: username, isAuthenticated: AuthEnum.AUTHENTICATED })
		else
			this.setState({ isAuthenticated: AuthEnum.UNAUTHENTICATED })
	}

	signup = async (newUsername, email, password, successCb = () => {}) => {
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
		const res = await API.login(oldUsername, password)

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
		await API.logout();
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

