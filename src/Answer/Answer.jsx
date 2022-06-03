import React from "react"
import "./Answer.css"

export default function Answer(props) {
	let players = ""
	if (props.players !== undefined && props.players.length !== 0) {
		players = ` (${props.players.toString().replaceAll(",", ", ")})`
	}

	return (
		<div className="px-4 py-4 cursor-pointer bg-darkest-blue w-2/3 text-center mb-4 rounded-xl">
			<input
				className="cursor-pointer"
				type="radio"
				id={props.text}
				name="answers"
				value={props.text}
			/>{" "}
			<label className="pl-4 text-xl cursor-pointer w-full" htmlFor={props.text}>
				{props.text + players}
			</label>
		</div>
	)
}
