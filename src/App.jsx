import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import data from "./sampleData.json"
import "./App.css"
import GameScreen from "./GameScreen/GameScreen"
import LandingScreen from "./LandingScreen/LandingScreen"
import Title from "./Title/Title"
import LobbyScreen from "./LobbyScreen/LobbyScreen"

function App() {
	const [gameData, setGameData] = useState({})
	const [socket, setSocket] = useState(null)
	const [status, setStatus] = useState("in-landing")
	const [lobby, setLobby] = useState(null)
	const [ownName, setOwnName] = useState("test")
	const [lobbyMembers, setLobbyMembers] = useState([])
	const [answers, setAnswers] = useState({})

	const BACKEND_URL = "localhost:4005"

	useEffect(() => {
		console.log("Game Data Set!")
		console.log(gameData)
	}, [gameData])

	useEffect(() => {
		const socket = io(BACKEND_URL)

		socket.on("your-name", (data) => {
			console.log(`Received my new name: ${data}`)
			setOwnName(data)
		})

		socket.on("your-room-members", (data) => {
			console.log(data)
			setLobbyMembers(data)
		})

		socket.on("your-room-name", (data) => {
			setStatus("in-lobby")
			setLobby(data)
		})

		socket.on("your-game-started", () => {
			setStatus("in-game")
		})

		socket.on("your-game-info", (info) => {
			setGameData(info)
		})

		socket.on("room-answers", (data) => {
			console.log(data)
			let roundIndex = data.round_info.current
			const answers = data.all_questions[roundIndex].answers
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
			setAnswers(allAnswers)
		})

		setSocket(socket)
		return () => socket.close()
	}, [setSocket])

	function joinLobby(lobbyCode) {
		socket.emit("join-room", lobbyCode)
	}

	function changeMyName(newName) {
		socket.emit("change-client-name", newName)
	}

	function startGame() {
		socket.emit("start-game", lobby)
	}

	function sendAnswer(answer) {
		socket.emit("my-answer", {
			answer: answer,
			room: lobby,
		})
	}

	if (status === "in-landing") {
		return (
			<div className="App bg-darkest-blue h-screen">
				<Title name={ownName} />
				<LandingScreen
					joinFunction={joinLobby}
					changeNameFunction={changeMyName}
				/>
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
					gameData={gameData}
					sendAnswerFunction={sendAnswer}
					answers={answers}
				/>
			</div>
		)
	} else {
		alert("Status Error! Status = " + status)
	}
}

export default App
