import React from "react"

export default function ScoresScreen(props) {
	console.log(props)

	function orderPlayersArrayByScore(objs) {
		return objs.sort((a, b) => b.score - a.score)
	}

	return (
		<div className="text-center text-white text-xl mt-8">
			<h1 className="text-2xl">Scoreboard</h1>
			<div className="mt-8" />
			{orderPlayersArrayByScore(props.scores).map((e, value) => (
				<p key={e.name}>
					{value + 1}. {e.name}: {e.score}
				</p>
			))}
		</div>
	)
}
