import React, { Component } from "react";
import { trackPromise } from "react-promise-tracker";
import axios from "axios";


class Prosa extends Component {
	constructor() {
		super();
		this.state = {
			msg: "none yet"
		}
		trackPromise(
				axios.get("http://127.0.0.1:5000/slow")
						.then(res => this.setState({ msg: res.data.msg }) )
		)
	}

	render() {
		return (
				<div>
					<h1>Response msg:  {this.state.msg} </h1>
				</div>
		)
	}
}


export default Prosa;