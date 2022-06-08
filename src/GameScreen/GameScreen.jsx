import React from "react"
import Answer from "../Answer/Answer"
import { Rings } from "react-loader-spinner"

export default function GameScreen(props) {
	// NÄCHSTE FRAGE BUTTON WIRD ERST ANGEZEIGT, WENN ALLE CLIENTS EINE ANTWORT ABGEGEBEN HABEN
	console.log(props)
	let showNextQuestionButton = false
	if (props.gameinfo.player_answers !== undefined) {
		const playersArray = Object.keys(props.gameinfo.player_answers)
		console.log(playersArray)
		if (playersArray.length === props.gameinfo.scoreboard.length) {
			showNextQuestionButton = true
		}
	}

	function sendAnswer() {
		const answer = document.querySelector("input[name='answers']:checked").value
		if (answer !== undefined) {
			props.sendAnswerFunction(answer)
		}
	}

	function sendNextQuestion() {
		props.nextQuestionFunction()
	}

	function orderPlayersArrayByScore(objs) {
		return objs.sort((a, b) => b.score - a.score)
	}

	if (props.showLoadingSpinner === true) {
		return (
			<div className="flex justify-center items-center text-center">
				<Rings height="200" width="200" color="#ffffff" ariaLabel="loading" />
			</div>
		)
	} else {
		return (
			<div className="bg-darkest-blue flex flex-row justify-between items-start text-white">
				{/* Question Container */}
				<div className="flex flex-col justify-center items-center w-2/3">
					<h1 className="text-2xl py-8 text-center px-32">
						{props.gameinfo.current_question.question}
					</h1>
					{props.gameinfo.current_question.answers.map((answer) => (
						<Answer
							key={answer.toString()}
							text={answer}
							players={props.answers[answer]}
						/>
					))}
					<div
						onClick={sendAnswer}
						className="flex justify-center items-center border-2 hover:border-white w-2/5 h-16 mt-8 rounded-xl bg-blue hover:bg-darkest-blue border-blue transition-all cursor-pointer shadow-xl">
						<p>Antwort abgeben</p>
					</div>
					{showNextQuestionButton && (
						<button
							onClick={sendNextQuestion}
							className="transition-all cursor-pointer mt-8 bg-blue hover:bg-darkest-blue border-2 border-blue hover:border-white w-1/5 h-10 rounded-xl">
							Nächste Frage
						</button>
					)}
				</div>

				{/* Player Scores */}
				<div className="py-8 w-1/3 flex flex-col items-start justify-start">
					<h1 className="text-2xl mb-8">Scoreboard</h1>
					{orderPlayersArrayByScore(props.gameinfo.scoreboard).map((player) => (
						<p key={player.name} className="mb-2 text-base">
							{player.name}: {player.score}
						</p>
					))}

					<h1 className="text-4xl mt-16 mb-8">Status</h1>
					<p className="text-base mb-2">
						Runde: {props.gameinfo.current_round} / {props.gameinfo.total_rounds}
					</p>
				</div>
			</div>
		)
	}
}
