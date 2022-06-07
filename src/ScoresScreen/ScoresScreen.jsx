import React from "react"

export default function ScoresScreen(props) {
	console.log(props)
	return (
		<div className="text-center text-white text-xl mt-8">
			<h1 className="text-2xl">Scoreboard</h1>
			{props.scores.map((e) => (
				<p key={e.name}>
					{e.name}: {e.score}
				</p>
			))}
		</div>
	)
}
