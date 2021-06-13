import React, { Component } from "react";


class ProsaPost extends Component {

	render() {
		console.log(this.props)
		return (
				<div className="prosaPost" onMouseOver={this.mouseOver}>
					<div className="date">
						<div onClick={this.props.removePost} className="overlay-delete-but"><img src="/kryds.svg"/></div>
						<div>{this.props.data.date_day}</div>
						<div>{this.props.data.date_month}</div>
						{/*<div>{this.props.data.date_year}</div>*/}
						<div>{this.props.data.date_eventTime}</div>
					</div>
					<div className="info">
						<h4 className="title">{this.props.data.info_title}</h4>
						<p className="details">{this.props.data.info_details}</p>
					</div>
				</div>
		)
	}

}

export default ProsaPost;