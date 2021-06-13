import React, {useContext} from "react"
import {Route, useHistory} from "react-router";
import {AuthContext, AuthEnum } from "./auth";
import Nav from "./Nav"
import {motion} from "framer-motion";

const ProtectedRoute = ({component: Component, ...rest }) => {
	// const [isAuthenticated, setAuthenticated] = useState(false)
	// const [isPending, setPending] = useState(true)
	const history = useHistory()
	const authContext = useContext(AuthContext)

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
	else if (authContext.isAuthenticated === AuthEnum.UNAUTHENTICATED)
		history.push("/login")

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