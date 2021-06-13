import {Component} from "react";
import {Link} from "react-router-dom";


export default class nav extends Component {

	render() {

		return (
				<nav id="navigation">
					<Link to="/" className="link">Home</Link>
					<Link to="/dashboard" className="link">Dashboard</Link>
					<Link to="/about" className="link">About</Link>
				</nav>
		)
	}
}