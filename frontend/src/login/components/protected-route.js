import React, {useContext} from "react"
import {Redirect, Route} from "react-router";
import {AuthContext, AuthEnum } from "./auth";
import Nav from "../containers/Nav"
import Loader from "../containers/Loader"

const ProtectedRoute = ({component: Component, ...rest }) => {
	const authContext = useContext(AuthContext)

	if ( authContext.isAuthenticated === AuthEnum.PENDING )
		return <Loader msg="Attempting to authenticate" />

	if (authContext.isAuthenticated === AuthEnum.UNAUTHENTICATED)
		return <Redirect to="/login"/>

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