import React from "react"

export default function ScoresScreen(props) {
	console.log(props)

	function orderPlayersArrayByScore(objs) {
		return objs.sort((a, b) => b.score - a.score)
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="text-center text-white text-xl mt-16">
				<div className="bg-dark-blue rounded-xl shadow-xl p-8">
					<h1 className="text-3xl">Scoreboard</h1>
					<div className="mt-8" />
					{orderPlayersArrayByScore(props.scores).map((e, value) => (
						<p key={e.name}>
							{value + 1}. {e.name}: {e.score}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}
