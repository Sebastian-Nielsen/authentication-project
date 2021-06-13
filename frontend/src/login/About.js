import {Component} from "react"
import {AuthConsumer} from "./auth"


class About extends Component {

	render() {
		console.log("[About] Rendering ...")

		return (
				<AuthConsumer>
					{ ({ username, dummy })  =>
							<div>
								<h1>About </h1>
								{JSON.stringify({ username, dummy })}
								<button onClick={() => { this.props.history.push("/") }}>
									Goto home
								</button>
							</div>
					}
				</AuthConsumer>
		)
	}
}

export default About
