import {motion} from "framer-motion";
import React from "react";

const Loader = ({msg, ...rest}) => {
	return (
			<motion.div style={{display: "flex", justifyContent: "center", paddingTop: "5rem"}}
					inital={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
					transition={{duration: .7}}
			>
					<div style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center"}}>
						<div className="loader"/>
						<h4 style={{textAlign: "center"}}>{msg}</h4>
					</div>
			</motion.div>
	)
}
export default Loader;