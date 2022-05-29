import React from "react";
import Answer from "../Answer/Answer";

export default function GameScreen(props) {
	return (
		<div className="bg-darkest-blue flex flex-row justify-between items-start text-white">
			{/* Question Container */}
			<div className="flex flex-col justify-center items-center w-2/3">
				<h1 className="text-2xl py-8">{props.questions.question}</h1>
				{props.questions.answers.map((answer) => (
					<Answer text={answer} />
				))}
				<div className="flex justify-center items-center border-2 hover:border-white w-2/5 h-16 mt-8 rounded-xl bg-blue hover:bg-darkest-blue border-blue transition-all cursor-pointer shadow-xl">
					<p>Antwort abgeben</p>
				</div>
			</div>

			{/* Player Scores */}
			<div className="py-8 w-1/3 flex flex-col items-start justify-start">
				<h1 className="text-2xl mb-8">Scoreboard</h1>
				{props.players.map((player) => (
					<p className="mb-2 text-base">
						{player.place}. {player.player}: {player.score}
					</p>
				))}

				<h1 className="text-4xl mt-16 mb-8">Status</h1>
				<p className="text-base mb-2">
					Runde: {props.rounds.current_round} /{" "}
					{props.rounds.total_rounds}
				</p>

				
			</div>
		</div>
	);
}
