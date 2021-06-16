import React from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import Register from "./Register";
import Login from "./containers/Login";
import AuthProvider from "./components/auth";
import About from "./containers/About";
import Dashboard from "./containers/Dashboard";
import ProtectedRoute from "./components/protected-route";
import Home from "./containers/Home";
import NotificationsProvider from "./components/Notifications";
import { Blank } from "./containers/Blank"



const Routes = () => {
	const location = useLocation();
	return (
			<NotificationsProvider>
				<AuthProvider>
					<AnimatePresence exitBeforeEnter initial={true}>
						<Switch location={location} key={location.pathname}>

							<ProtectedRoute exact path="/" component={Home}/>
							<ProtectedRoute exact path="/about" component={About} />
							<ProtectedRoute exact path="/dashboard" component={Dashboard}/>

							<Route exact path="/blank" component={Blank}/>
							<Route exact path="/register" component={Register}/>
							<Route exact path="/login" component={Login}/>
							<Route path="*" component={() => "404 Not found"} />

						</Switch>
					</AnimatePresence>
				</AuthProvider>
			</NotificationsProvider>
	);
};

export default Routes