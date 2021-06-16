import {Component} from "react"
import {AuthConsumer} from "../components/auth"
import {motion} from "framer-motion";

class Dashboard extends Component {

	render() {
		return (
				<>
					<motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} >
						<AuthConsumer>
							{ ({ username, dummy })  =>
									<div className="component">
										<h1>Dashboard</h1>
										<p>You are logged in as: {JSON.stringify({ username, dummy })}</p>
									</div>
							}
						</AuthConsumer>
					</motion.div>
				</>
		)
	}
}

export default Dashboard