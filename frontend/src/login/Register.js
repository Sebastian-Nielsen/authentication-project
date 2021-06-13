import React, {Component, useContext, useState} from "react"
import { AuthContext } from "./auth"
import { AnimatePresence, motion } from "framer-motion"
import {Link} from "react-router-dom";
import NotificationsProvider, {NotificationContext, Notifications, NotifyEnum} from "./Notifications";
import {useHistory} from "react-router";
import {RegisterMonkeySvg} from "./svg/RegisterMonkeySvg";

const Register = () => {
	const history = useHistory()
	const authContext  = useContext(AuthContext)
	const notifContext = useContext(NotificationContext)
	const [username, setUsername] = useState("sebastian")
	const [email, setEmail] = useState("sebastian@mail.dk")
	const [password, setPassword] = useState("123")

	const handleSubmit = event => {
		event.preventDefault()
		authContext.signup(
				username, email, password,
				()=>history.push("/dashboard")
		)
	}

	return (
			<motion.section id="register"
			                inital={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
			                transition={{duration:0.2}}
			>

				<Notifications />

				<form name="signup_form" onSubmit={handleSubmit}>
					<h2>Register</h2>

					<input type="text" name="username" placeholder="username" className="field"
					       value={username}
					       onChange={e => setUsername(e.target.value)}/>
					<input type="text" name="email" placeholder="email" className="field"
					       value={email}
					       onChange={e => setEmail(e.target.value)}/>
					<input type="text" name="password" placeholder="password" className="field"
					       value={password}
					       onChange={e => setPassword(e.target.value)}/>

					<input type="text" name="verifyPassword" placeholder="verify password" className="field" />

					<div className="buttons flex-row-3-1">
						<input type="submit" value="Sign up" className="btn type-2 primary"/>
						<Link to="/login">
							<button className="btn type-2 secondary">
								Log in
							</button>
						</Link>
					</div>
				</form>
				{/*<div className="img-container">*/}
				<motion.div className="svg-container"
						initial={{opacity: 0}} animate={{opacity:1}}
						transition={{duraction:1}}
				>
					<RegisterMonkeySvg/>
				</motion.div>
				{/*</div>*/}
			</motion.section>
	)

}
// class Register extends Component {
// 	static contextType = AuthContext
//
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			username: "sebastian3495",
// 			email: "sebastian@hotmail.dk",
// 			password: "123",
// 			verifyPassword: ""
// 		}
// 	}
//
// 	handleSubmit = async (event) => {
// 		event.preventDefault()
// 		console.log()
// 		console.log("[handleSubmit]")
// 		console.log()
// 		const username = await this.context.signup(
// 				this.state.username,
// 				this.state.email,
// 				this.state.password
// 		)
// 		console.log("[handleSubmit] res:", username)
// 		if (username === null)
// 			return
// 		this.props.history.push("/dashboard")
// 	}
//
// 	handleInputChange = (event) => {
// 		const target = event.target
// 		const name  = target.name
// 		const value = target.value
//
// 		this.setState({
// 			[name]: value
// 		})
// 	}
//
// 	render() {
// 		return (
// 				<motion.section id="register"
// 						inital={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
// 				                transition={{duration:0.2}}
// 				>
// 					<form name="signup_form" onSubmit={this.handleSubmit}>
// 						<h2>Register</h2>
//
// 						{/*<label htmlFor="username">Username</label>*/}
// 						<input type="text" name="username" placeholder="username" className="field"
// 						       value={this.state.username}
// 						       onChange={this.handleInputChange}/>
//
// 						{/*<label htmlFor="email">Email</label>*/}
// 						<input type="text" name="email" placeholder="email" className="field"
// 						       value={this.state.email}
// 						       onChange={this.handleInputChange}/>
//
// 						{/*<label htmlFor="password">Password</label>*/}
// 						<input type="text" name="password" placeholder="password" className="field"
// 						       value={this.state.password}
// 						       onChange={this.handleInputChange}/>
//
// 						<input type="text" name="verifyPassword" placeholder="verify password" className="field"
// 						       value={this.state.verifyPassword}
// 						       onChange={this.handleInputChange}/>
//
// 						<div className="vsplit">
// 							<input type="submit" value="Sign up" className="btn recommendedOption"/>
// 							<Link to="/login">
// 								<button className="btn" >
// 									Log in
// 								</button>
// 							</Link>
// 						</div>
// 					</form>
// 					{/*<div className="img-container">*/}
// 					<motion.div
// 							initial={{opacity: 0}} animate={{opacity:1}}
// 							transition={{duraction:1}}
// 					>
// 						<img src="https://cdn2.iconfinder.com/data/icons/bondage-and-shibari-erotic-fetish/5/bdsm_adult_bondage_erotic_fetish_shibari-02-512.png" alt=""/>
// 					</motion.div>
// 					{/*</div>*/}
// 				</motion.section>
// 		)
// 	}
//
// }


export default Register