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

				<h1 className="text-4xl mt-16 mb-8">Namen ändern</h1>
				<div>
					<input
						type="text"
						className="py-2 px-4 rounded-xl text-darkest-blue w-64 transition-all shadow-xl"
						placeholder="Ändere deinen Namen ..."
					/>
					<button className="transition-all bg-blue py-2 px-4 rounded-xl ml-4 text-white shadow-xl border-darkest-blue border-2 hover:border-white hover:bg-darkest-blue">
						Namen ändern
					</button>
				</div>
			</div>
		</div>
	);
}
