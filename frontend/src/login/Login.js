import React, {Component, useContext, useState} from "react"
import {AuthContext, AuthEnum} from "./auth";
import "./css/index.css"

import {motion} from "framer-motion"
import {Link, useHistory} from "react-router-dom";
import {Notifications, NotificationContext, NotifyEnum} from "./Notifications";

import {LoginMonkeySvg} from "./svg/LoginMonkeySvg"

const Login = () => {
	const history = useHistory()
	const authContext = useContext(AuthContext)
	const [username, setUsername] = useState("sebastian")
	const [password, setPassword] = useState("123")


	const onLoginSubmit = (event, username, password) => {
		event.preventDefault()
		authContext.login(
				username, password,
				() => history.push("/")
		)
	}

	return (
			<motion.section id="login"
			            inital={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
			            transition={{duration: 0.2}}
			>

				<form onSubmit={e => onLoginSubmit(e, username, password)} autoComplete="off">

					<Notifications/>

					<h2>Login</h2>

					<input type="text" name="emailOrUsername" placeholder="username" className="field"
					       value={username} onChange={e => setUsername(e.target.value)}/>
					<input type="text" name="password" placeholder="password" className="field"
					       value={password} onChange={e => setPassword(e.target.value)}/>

					<div className="buttons flex-row-3-1">
						<input type="submit" value="Sign in" className="btn type-2 primary"/>
						<Link to="/register">
							<button className="btn type-2 secondary"> Register</button>
						</Link>
					</div>


				</form>
				<motion.div className="svg-container"
				            transition={{duraction: 1}} initial={{opacity: 0}} animate={{opacity: 1}}
				>
					<LoginMonkeySvg/>
				</motion.div>
			</motion.section>
	)
}

// class Login extends Component {
// 	static contextType = AuthContext
//
// 	constructor(props, context) {
// 		super(props, context)
// 		this.state = {
// 			emailOrUsername: "sebastian3495",
// 			password: "123"
// 		}
// 	}
//
// 	handleLogin = async (event) => {
// 		event.preventDefault()
// 		console.log()
// 		console.log("[login:handleSubmit]")
// 		console.log("[login:handleSubmit] this.context:", this.context)
// 		console.log()
// 		const username = await this.context.login(
// 				this.state.emailOrUsername,
// 				this.state.password,
// 				() => this.props.history.push("/dashboard")
// 		)
// 		if (username === null) {
// 			this.context.
// 			// const newNotif = createNotification(NotifyEnum.ERR_INCORRECT_PWD_OR_USERNAME)
// 			// this.setState(prevState => ({
// 			// 	notifications: [...prevState.notifications, newNotif]
// 			// }))
// 		} else
// 			console.log("[login:handleSubmit] login sucess!")
// 	}
//
// 	handleInputChange = (event) => {
// 		const target = event.target
// 		const name  = target.name
// 		const value = target.value
// 		this.setState({
// 			[name]: value
// 		})
// 	}
//
// 	render() {
// 		return (
// 				<motion.div id="login"
// 				                inital={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
// 				            // transition={{duration: 0.5}}
// 				>
//
// 					<form onSubmit={this.handleLogin} autoComplete="off">
//
// 						<Notifications />
//
// 						{/*<label htmlFor="emailOrUsername">Email or Username</label>*/}
// 						<input type="text" name="emailOrUsername" placeholder="username" className="field"
// 						       value={this.state.emailOrUsername}
// 						       onChange={this.handleInputChange}/>
//
// 						{/*<label htmlFor="password">Password</label>*/}
// 						<input type="text" name="password" placeholder="password" className="field"
// 						       value={this.state.password}
// 						       onChange={this.handleInputChange}/>
//
// 					<div className="vsplit">
// 						<input type="submit" value="Sign in" className="btn recommendedOption"/>
// 						<Link to="/register">
// 							<button className="btn" >
// 								Register
// 							</button>
// 						</Link>
// 					</div>
//
// 					</form>
// 					<motion.div
// 							initial={{opacity: 0}} animate={{opacity:1}}
// 							transition={{duraction:1}}
// 					>
// 						<img src="https://cdn1.iconfinder.com/data/icons/bondage-and-shibari-erotic-fetish/5/bdsm_adult_bondage_erotic_fetish_shibari-08-512.png"
// 						     alt=""/>
// 					</motion.div>
// 				</motion.div>
// 		)
// 	}
// }



export default Login