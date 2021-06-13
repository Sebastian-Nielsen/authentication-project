import {Component, useEffect, useState} from "react"; // https://www.youtube.com/watch?v=lG6Z0FQj_SI
import axios from "axios";

const Resource = (props) => {
	const [isLoading, setIsLoading] = useState(true)
	const [payload, setPayload] = useState([])
	const [err, setErr] = useState({})

	useEffect(() => {
		axios.get("http://localhost:5000" + props.path)
				.then( res => { console.log(typeof(res.data), res.data); setIsLoading(false); setPayload(res.data) })
				.catch(err => { setIsLoading(false); setErr(err)          })
	}, [])

	return props.render({isLoading, err, payload})
}
export default Resource