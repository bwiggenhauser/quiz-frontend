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
		for (const radio of document.getElementsByName("answers")) {
			console.log(radio)
			document.getElementById(radio.id).disabled = true
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
			<div className="bg-darkest-blue flex flex-row justify-center items-start text-white">
				{/* Question Container */}
				<div className="flex flex-col justify-center items-end mr-16 w-3/5">
					<div className="bg-dark-blue rounded-xl shadow-xl py-8 px-8 mt-8 w-4/5">
						<div className="mb-4">
							<h1 className="mb-1">
								{`${props.gameinfo.current_question.category} | ${props.gameinfo.current_question.difficulty}`}
							</h1>
						</div>
						<div className="flex flex-row justify-between items-start">
							<h1 className="text-2xl mb-8">
								{props.gameinfo.current_question.question}
							</h1>
							<h1 className="text-2xl ml-8 w-32 text-right">
								{props.gameinfo.current_round} / {props.gameinfo.total_rounds}
							</h1>
						</div>
						{props.gameinfo.current_question.answers.map((answer) => (
							<Answer
								key={answer.toString()}
								text={answer}
								players={props.answers[answer]}
							/>
						))}
						<div className="flex flex-row items-center justify-start mt-16">
							<div
								onClick={sendAnswer}
								className="flex justify-center items-center border-2 hover:border-white w-2/5 h-16 rounded-xl bg-blue hover:bg-darkest-blue border-blue transition-all cursor-pointer shadow-xl">
								<p>Send Answer</p>
							</div>
							{showNextQuestionButton && (
								<button
									onClick={sendNextQuestion}
									className="transition-all shadow-xl w-2/5 h-16 ml-8 cursor-pointer bg-blue hover:bg-darkest-blue border-2 border-blue hover:border-white rounded-xl">
									Next Question
								</button>
							)}
						</div>
					</div>
				</div>

				{/* Player Scores */}
				<div className="w-1/4 flex flex-col">
					<div className="bg-dark-blue rounded-xl shadow-xl py-8 w-2/3 px-8 mt-8">
						<h1 className="text-2xl mb-8 font-bold">Scoreboard</h1>
						{orderPlayersArrayByScore(props.gameinfo.scoreboard).map(
							(player, value) => (
								<p key={player.name} className="mb-2 text-base">
									{value + 1}. {player.name}: {player.score}
								</p>
							)
						)}
					</div>
				</div>
			</div>
		)
	}
}
