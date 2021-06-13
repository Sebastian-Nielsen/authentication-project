import React from "react";
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import Register from "./Register";
import Login from "./Login";
import AuthProvider from "./auth";
import About from "./About";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./protected-route";
import Home from "./Home";
// import { User } from "./User"
import NotificationsProvider from "./Notifications";
import { Blank } from "./Blank"
import Nav from "./Nav"



const Routes = () => {
	const location = useLocation();
	return (
			<NotificationsProvider>
				<AuthProvider>
					<AnimatePresence exitBeforeEnter initial={true}>  {/* Instead of Switch so that we get animations */}
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