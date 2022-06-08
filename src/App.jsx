import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import "./App.css"
import GameScreen from "./GameScreen/GameScreen"
import LandingScreen from "./LandingScreen/LandingScreen"
import Title from "./Title/Title"
import LobbyScreen from "./LobbyScreen/LobbyScreen"
import ScoresScreen from "./ScoresScreen/ScoresScreen"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App() {
	const [socket, setSocket] = useState(null)
	const [status, setStatus] = useState("in-landing")
	const [lobby, setLobby] = useState("")
	const [ownName, setOwnName] = useState(null)
	const [lobbyMembers, setLobbyMembers] = useState([])
	const [answers, setAnswers] = useState({})
	const [scores, setScores] = useState({})
	const [myGame, setMyGame] = useState({})

	const BACKEND_URL = "localhost:4005"
	//const BACKEND_URL = "https://quizbackend.bwiggenhauser.de"

	useEffect(() => {
		const socket = io(BACKEND_URL)

		socket.on("your-name-changed", (newName) => {
			console.log(`Received my new name: ${newName}`)
			setOwnName(newName)
		})

		socket.on("your-room-name", (room) => {
			console.log(`My lobby has been set to ${room}`)
			setStatus("in-lobby")
			setLobby(room)
		})

		socket.on("your-room-members", (roomMembers) => {
			console.log(`Received my room members:`)
			console.log(roomMembers)
			setLobbyMembers(roomMembers)
		})

		socket.on("game-data", async (data) => {
			console.log("Received game data")
			console.log(data)
			uncheckRadios()
			setAnswers({})
			setMyGame(data)
		})

		socket.on("all-players", (allPlayers) => {
			console.log(allPlayers)
		})

		socket.on("info", (data) => {
			console.log(data)
		})

		socket.on("your-game-started", () => {
			setStatus("in-game")
		})

		socket.on("room-answers", (data) => {
			const answers = data.current_question.answers
			let allAnswers = {}
			for (const a of answers) {
				let allClients = []
				for (const p of Object.keys(data.player_answers)) {
					if (data.player_answers[p] === a) {
						allClients.push(p)
					}
				}
				allAnswers[a] = allClients
			}
			setMyGame(data)
			setAnswers(allAnswers)
		})

		socket.on("game-finished", (data) => {
			setScores(data.scoreboard)
			setStatus("finished")
		})

		setSocket(socket)
		return () => socket.close()
	}, [setSocket])

	function uncheckRadios() {
		let elements = document.getElementsByTagName("input")

		for (var i = 0; i < elements.length; i++) {
			if (elements[i].type == "radio") {
				elements[i].checked = false
			}
		}
	}

	function joinLobby(lobbyCode) {
		socket.emit("join-room", lobbyCode)
	}

	function changeMyName(newName) {
		socket.emit("change-client-name", newName)
	}

	function startGame(roundsNum) {
		socket.emit("start-game", {
			room: lobby,
			totalRounds: roundsNum,
		})
	}

	function sendAnswer(answer) {
		socket.emit("my-answer", {
			answer: answer,
			room: lobby,
		})
	}

	function nextQuestion() {
		socket.emit("next-question", lobby)
	}

	if (status === "in-landing") {
		return (
			<div className="App bg-darkest-blue h-screen">
				<Title name={ownName} />
				<LandingScreen joinFunction={joinLobby} changeNameFunction={changeMyName} />
			</div>
		)
	} else if (status === "in-lobby") {
		return (
			<div className="App bg-darkest-blue h-screen">
				<Title name={ownName} />
				<LobbyScreen
					lobbyName={lobby}
					members={lobbyMembers}
					startGameFunction={startGame}
				/>
			</div>
		)
	} else if (status === "in-game") {
		return (
			<div className="App bg-darkest-blue h-screen">
				<Title name={ownName} />
				<GameScreen
					gameinfo={myGame}
					sendAnswerFunction={sendAnswer}
					answers={answers}
					nextQuestionFunction={nextQuestion}
				/>
			</div>
		)
	} else if (status === "finished") {
		return (
			<div className="App bg-darkest-blue h-screen">
				<Title name={ownName} />
				<ScoresScreen scores={scores} />
			</div>
		)
	} else {
		alert("Status Error! Status = " + status)
	}
}

export default App
