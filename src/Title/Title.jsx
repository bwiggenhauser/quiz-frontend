import React from "react"

export default function Title(props) {
	return (
		<div>
			<div className="flex flex-row justify-between items-center text-center pt-8">
				<div className="w-1/3" />
				<h1 className="text-white text-7xl font-extrabold text-center w-1/3">Quiz.io</h1>
				<p className="text-white text-xl text-center w-1/3">{props.name}</p>
			</div>
			<div className="text-center text-white pt-4 text-xl">The greatest online multiplayer quiz game</div>
		</div>
	)
}
