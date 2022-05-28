import React from "react";
import Answer from "../Answer/Answer";

export default function GameScreen(props) {
	const data = props.data;

	return (
		<div className="bg-darkest-blue flex flex-row justify-between items-start text-white">
			{/* Question Container */}
			<div className="flex flex-col justify-center items-center w-2/3">
				<h1 className="text-4xl py-8">
					{data.current_question.question}
				</h1>
				{data.current_question.answers.map((answer) => (
					<Answer text={answer} />
				))}
				<div className="flex justify-center items-center border-2 border-white w-2/5 h-16 mt-8 rounded-xl hover:bg-blue hover:border-blue transition-all cursor-pointer shadow-xl">
					<p>Antwort abgeben</p>
				</div>
			</div>

			{/* Player Scores */}
			<div className="py-8 w-1/3 flex flex-col items-start justify-start">
				<h1 className="text-4xl mb-8">Scoreboard</h1>
				{data.player_scores.map((stats) => (
					<p className="text-xl mb-2">
						{stats.place}. {stats.player}: {stats.score}
					</p>
				))}

				<h1 className="text-4xl mt-16 mb-8">Status</h1>
				<p className="text-xl mb-2">
					Runde: {data.round_info.current_round} /{" "}
					{data.round_info.total_rounds}
				</p>
			</div>
		</div>
	);
}
