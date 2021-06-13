import {Component, useEffect, useState} from "react"; // https://www.youtube.com/watch?v=lG6Z0FQj_SI
import axios from "axios";
import {HOST_URL} from "./Constants";

const Resource = (props) => {
	const [isLoading, setIsLoading] = useState(true)
	const [payload, setPayload] = useState([])
	const [err, setErr] = useState({})

	useEffect(() => {
		axios.get(HOST_URL + props.path)
				.then( res => { console.log(typeof(res.data), res.data); setIsLoading(false); setPayload(res.data) })
				.catch(err => { setIsLoading(false); setErr(err)          })
	}, [])

	return props.render({isLoading, err, payload})
}
export default Resource