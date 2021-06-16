import React, {useContext, useState} from "react"
import {AuthContext} from "../components/auth";
import "../css/index.css"

import {motion} from "framer-motion"
import {Link, useHistory} from "react-router-dom";
import Notifications from "./NotificationsCenter";

import {LoginMonkeySvg} from "../svg/LoginMonkeySvg"

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

export default Login