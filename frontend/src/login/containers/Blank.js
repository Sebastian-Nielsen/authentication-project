

export const Blank = () => {   // This is just a page for testing styling of buttons
	return (
			<section style={{width:"100%", height:"100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
				<button className="type-1 primary">Hello There</button>
				<button className="type-1 secondary">Hello There</button>
				<button className="type-2 primary">Hello There</button>
				<button className="type-2 secondary">Hello There</button>
				<button className="type-accent">Hello There</button>
			</section>
	)
}