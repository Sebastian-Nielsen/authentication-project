import {Component} from "react"
import {AuthConsumer} from "./auth"


class About extends Component {

	render() {
		console.log("[About] Rendering ...")

		return (
				<AuthConsumer>
					{ ({ username, dummy })  =>
							<div className="component">
								<h1>About </h1>
								<p>A simple authentication page</p>
							</div>
					}
				</AuthConsumer>
		)
	}
}

export default About
