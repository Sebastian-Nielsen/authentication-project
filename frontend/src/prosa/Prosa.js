import React, {Component} from "react"
import {trackPromise} from "react-promise-tracker"
import axios from "axios"
import ProsaPost from "./ProsaPost"
import "./prosa.css"
import removeAt from "./helperFunctions"
import Spinner from "./Spinner";

class Prosa extends Component {
	constructor() {
		super();
		this.removePost = this.removePost.bind(this);
		this.state = {
			postIndexOffset: 0,
			posts: []
		}
		trackPromise(
				axios.get("http://localhost:5000/prosa/newPosts")
						.then(res => {
							console.log(res.data, res.status);
							this.setState({ posts: res.data })
						})
		)
	}

	removePost = index => {
		// Delete the post on the server
		axios.post("http://localhost:5000/prosa/newPost", this.state.posts[index],
				{ headers: { 'Content-Type': 'application/json' } }
		)
				.then(res => console.log(res.status, res.data))

		// Remove it from the lists of posts to render
		var posts_copy = removeAt(index, this.state.posts)
		this.setState({
			posts: posts_copy,
			postIndexOffset: this.state.postIndexOffset - 1
		})
	}

	render() {
		return (
				<section id="prosa">
					{this.state.posts &&
						this.state.posts.map(
								(post, index) =>
										<ProsaPost key={index} data={post}
										           postIndexOffset={this.state.postIndexOffset}
										           removePost={() => this.removePost(index)} />
								)
					}

				<Spinner/>
				</section>
		)
	}
}


export default Prosa;