import {Component} from "react";


export default class Market extends Component {
	state = {
		activeCollapsible: null
	}

	onToolbarButClick = event => {
		this.setState({
			activeCollapsible: event.target.className.trim()
		})
	}

	render() {
		const activeFilter = this.state.activeCollapsible === "filter" ? "active" : ""
		const activeSearch = this.state.activeCollapsible === "search" ? "active" : ""
		return (
			<section id="market">

				<h1 style={{margin: "0 auto"}}>Snop Nosed Monkey</h1>

				<div className="toolbar">
					<div className="btn-container">
						<button className={`filter ${activeFilter}`}  onClick={this.onToolbarButClick}>Filter</button>
						<button className={`search ${activeSearch}`}  onClick={this.onToolbarButClick}>Search</button>
					</div>
					<div className="collapsibles">
						<div className={ `filter-collapsible ${activeFilter}` }>
							<div className="">
								<div className="checkBox">a</div>
								<div className="checkBox">b</div>
							</div>
						</div>
						<div className={ `search-collapsible ${activeSearch}` }>
							Search-collapsible
						</div>
					</div>
				</div>


				<div className="content">
					{/*<Card/>*/}
					{/*<Card/>*/}
					{/*<Card/>*/}
					{/*<Card/>*/}
					{/*<Card/>*/}
					{/*<Card/>*/}
				</div>
			</section>
		)
	}

}