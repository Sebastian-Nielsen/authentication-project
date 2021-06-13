import {Component, useCallback, useContext, useState} from "react";
import {AuthConsumer, AuthContext} from "./auth";
import {AnimatePresence, motion} from "framer-motion"
import Nav from "./Nav"
import Resource from "./Resource"
import {Link} from "react-router-dom";
import {deleteUser, insertTenUsers, removeAllUsers} from "./api";
import {useHistory} from "react-router";

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
											<Link to="/login">
												<button className="type-2 secondary"> Login </button>
											</Link>
											<button className="type-2 secondary" onClick={authContext.logout}> Sign out </button>
										</div>

										<div id="registered-users" className="component">
											<p>Click on a user to remove the user from the database</p>
											<button className="type-2 secondary" onClick={insertTenUsers}> Insert 10 random users </button>
											<button className="type-2 secondary" onClick={removeAllUsers}> Remove all users </button>
											<Resource
													path="/loginForm/fetchAllDataFromAllUsers"
													render={data => {
														if (data.isLoading) return <h3>Data is loading ..</h3>
														if (data.err === undefined) return <h3>Error: {JSON.stringify(data)}</h3>
														return <table>
															<tbody>
															<tr>
																<th>Username</th>
																<th>Password</th>
																<th>email</th>
															</tr>
															{data.payload.map(user =>
																	<motion.tr onClick={e => deleteUser(user.username, () => e.target.parentElement.remove())} key={user.username}
																	           exit={{ scale: 0.2 }}
																	>
																		<td>{user.username}</td>
																		<td>{user.unecrypted_password}</td>
																		<td>{user.email}</td>
																	</motion.tr>
															)}
															</tbody>
														</table>
													}}
											/>
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