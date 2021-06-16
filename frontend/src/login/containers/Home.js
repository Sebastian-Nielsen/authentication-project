import {useContext} from "react";
import {AuthConsumer, AuthContext} from "../components/auth";
import {AnimatePresence} from "framer-motion"
import UserInfoTable from "./userInfoTable"
import {Link} from "react-router-dom";
import {insertTenUsers, removeAllUsers} from "../components/api";

const Home = () => {
	const authContext = useContext(AuthContext)
	return (
			<AnimatePresence>

				<section id="home">

					<AuthConsumer>
						{({username}) => {
							return (
									<>

										<div className="component">
											<h1>Home</h1>
										</div>

										<div id="info" className="component">
											<h1>Username: {username}</h1>
											<h4>You have a valid token saved in your browser.</h4>
											<p>Passwords are stored in plaintext for demonstration purposes. In production, they're of course encrypted.</p>
											<Link to="/dashboard">
												<button className="type-2 secondary"> Dashboard </button>
											</Link>
											<Link to="/about">
												<button className="type-2 secondary"> About </button>
											</Link>
											{/*<Link to="/login">*/}
											{/*	<button className="type-2 secondary"> Login </button>*/}
											{/*</Link>*/}
											<button className="type-2 secondary" onClick={authContext.logout}> Sign out </button>
										</div>

										<div id="registered-users" className="component">
											<button className="type-2 secondary" onClick={insertTenUsers}> Insert 10 random users </button>
											<button className="type-2 secondary" onClick={removeAllUsers}> Remove all users </button>
											<p>Click on a user to remove the user from the database</p>
											<UserInfoTable/>
										</div>

									</>

							)
						}}
					</AuthConsumer>
				</section>
			</AnimatePresence>
	)
}

export default Home