import React from "react"
import Answer from "../Answer/Answer"

export default function GameScreen(props) {
	const current_question =
		props.gameData.all_questions[props.gameData.round_info.current]["question"]
	const current_answers =
		props.gameData.all_questions[props.gameData.round_info.current]["answers"]
	const players = props.gameData.players


    // NÄCHSTE FRAGE BUTTON WIRD ERST ANGEZEIGT, WENN ALLE CLIENTS EINE ANTWORT ABGEGEBEN HABEN
	let showNextQuestionButton = false
	if (props.gameData.player_answers !== undefined) {
		const playersArray = Object.keys(props.gameData.player_answers)
		if (playersArray.length === props.gameData.players.length) {
			showNextQuestionButton = true
		}
	}

	function sendAnswer() {
		const answer = document.querySelector("input[name='answers']:checked").value
		if (answer !== undefined) {
			props.sendAnswerFunction(answer)
		}
	}

	return (
		<div className="bg-darkest-blue flex flex-row justify-between items-start text-white">
			{/* Question Container */}
			<div className="flex flex-col justify-center items-center w-2/3">
				<h1 className="text-2xl py-8">{current_question}</h1>
				{current_answers.map((answer) => (
					<Answer text={answer} players={props.answers[answer]} />
				))}
				<div
					onClick={sendAnswer}
					className="flex justify-center items-center border-2 hover:border-white w-2/5 h-16 mt-8 rounded-xl bg-blue hover:bg-darkest-blue border-blue transition-all cursor-pointer shadow-xl">
					<p>Antwort abgeben</p>
				</div>
				{showNextQuestionButton && (
					<button className="transition-all cursor-pointer mt-8 bg-blue hover:bg-darkest-blue border-2 border-blue hover:border-white w-1/5 h-10 rounded-xl">
						Nächste Frage
					</button>
				)}
			</div>

			{/* Player Scores */}
			<div className="py-8 w-1/3 flex flex-col items-start justify-start">
				<h1 className="text-2xl mb-8">Scoreboard</h1>
				{players.map((player) => (
					<p className="mb-2 text-base">
						{player.name}: {player.score}
					</p>
				))}

				<h1 className="text-4xl mt-16 mb-8">Status</h1>
				<p className="text-base mb-2">
					Runde: {props.gameData.round_info.current + 1} /{" "}
					{props.gameData.round_info.total}
				</p>
			</div>
		</div>
	)
}
