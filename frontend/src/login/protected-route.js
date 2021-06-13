import React, {useContext} from "react"
import {Route, useHistory} from "react-router";
import {AuthContext, AuthEnum } from "./auth";
import Nav from "./Nav"
import {motion} from "framer-motion";
import {NotificationContext, NotifyEnum} from "./Notifications";
import Login from "./Login";

const ProtectedRoute = ({component: Component, ...rest }) => {
	// const [isAuthenticated, setAuthenticated] = useState(false)
	// const [isPending, setPending] = useState(true)
	const history = useHistory()
	const authContext = useContext(AuthContext)
	const notifContext = useContext(NotificationContext)

	console.log()
	console.log("[ProtectedRoute]")
	console.log("[ProtectedRoute] username:", authContext.username)
	console.log("[ProtectedRoute] isAuthenticated:", authContext.isAuthenticated)
	console.log()
	console.log("Rest")
	console.log(rest)
	console.log()

	if ( authContext.isAuthenticated === AuthEnum.PENDING )
		return (
				<motion.div
						inital={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
			            transition={{duration: .7}}
				>
					<div className="loader"/>
					<h1>Attempting to authenticate session</h1>
				</motion.div>
		)
	else if (authContext.isAuthenticated === AuthEnum.UNAUTHENTICATED) {
		console.log("You are not authenticated1")
		console.log("You are not authenticated2")
		console.log("You are not authenticated3")
		return <Login/>;
		// notifContext.createNotification(NotifyEnum.WARN_NOT_AUTHENTICATED)
		// notifContext.createNotification(NotifyEnum.NOTICE_PWDS_DO_NOT_MATCH)
	}
	console.log("Is authenticatd as12")

	return (
			<>
				<Nav/>
				<Route {...rest}
				       render={props => {
					       return <Component {...props} />
				       }}
				/>
			</>
	)
}

export default ProtectedRoute