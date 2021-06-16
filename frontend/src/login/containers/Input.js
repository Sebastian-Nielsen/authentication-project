import React from "react";


const Input = ({ value, changeValue }) => {
	return (
			<input type="text" name="username" placeholder="username" className="field"
			       value={value} onChange={e => changeValue(e.target.value)}/>
	)
}
export default Input