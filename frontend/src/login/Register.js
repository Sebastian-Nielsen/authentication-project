import React, {useContext, useState} from "react"
import { AuthContext } from "./components/auth"
import { motion } from "framer-motion"
import {Link} from "react-router-dom";
import Notifications from "./containers/NotificationsCenter"
import {useHistory} from "react-router";
import {RegisterMonkeySvg} from "./svg/RegisterMonkeySvg";
import Input from "./containers/Input";

const Register = () => {
	const history = useHistory()
	const authContext  = useContext(AuthContext)
	const [username, setUsername] = useState("sebastian")
	const [email, setEmail] = useState("sebastian@mail.dk")
	const [password, setPassword] = useState("123")
	const [verifyPassword, setVerifyPassword] = useState("123")

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

					<Input name="username"       placeholder="username" value={username} changeValue={setUsername}/>
					<Input name="email"          placeholder="email"    value={email}    changeValue={setEmail}/>
					<Input name="password"       placeholder="passowrd" value={password} changeValue={setPassword}/>
					<Input name="verifyPassword" placeholder="verify password" value={verifyPassword} changeValue={setVerifyPassword}/>

					<div className="buttons flex-row-3-1">
						<input type="submit" value="Sign up" className="btn type-2 primary"/>
						<Link to="/login">
							<button className="btn type-2 secondary"> Log in </button>
						</Link>
					</div>
				</form>

				<motion.div className="svg-container"
						initial={{opacity: 0}} animate={{opacity:1}} transition={{duraction:1}}
				>
					<RegisterMonkeySvg/>
				</motion.div>

			</motion.section>
	)

}

export default Register