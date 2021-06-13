import {Component} from "react"
import {AuthConsumer} from "./auth"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Market from "./Market"
import Nav from "./Nav"

class Dashboard extends Component {

	render() {
		console.log("[Dashboard] Rendering ...")

		return (
				<>

					<motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} >


						<AuthConsumer>
							{ ({ username, dummy })  =>
									<div>
										<Link to="/user">
											Goto User
										</Link>
										<h1>Dashboard </h1>
										{JSON.stringify({ username, dummy })}
										<Link to="/about">
											Goto about
										</Link>
										<Link to="/">
											Goto home
										</Link>
									</div>
							}
						</AuthConsumer>
						{/*<Market />*/}
					</motion.div>
				</>
		)
	}
}

export default Dashboard