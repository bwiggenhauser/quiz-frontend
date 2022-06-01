import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import data from "./sampleData.json"
import "./App.css"
import GameScreen from "./GameScreen/GameScreen"
import LandingScreen from "./LandingScreen/LandingScreen"
import Title from "./Title/Title"
import LobbyScreen from "./LobbyScreen/LobbyScreen"

function App() {
	const [questionData, setQuestionData] = useState(data.current_question)
	const [playerData, setPlayerData] = useState(data.player_scores)
	const [roundData, setRoundData] = useState(data.round_info)
	const [socket, setSocket] = useState(null)
	const [status, setStatus] = useState("in-landing")
	const [lobby, setLobby] = useState(null)
	const [ownName, setOwnName] = useState("test")
	const [lobbyMembers, setLobbyMembers] = useState([])

	const BACKEND_URL = "localhost:4005"

	useEffect(() => {}, [])

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

		setSocket(socket)
		return () => socket.close()
	}, [setSocket])

	function joinLobby(lobbyCode) {
		socket.emit("join-room", lobbyCode)
	}

	function changeMyName(newName) {
		socket.emit("change-client-name", newName)
	}

	function addPlayer() {
		let current = playerData
		current.push({
			place: 4,
			player: "Vimme",
			score: 7,
		})
		setPlayerData([...current])
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
				<LobbyScreen lobbyName={lobby} members={lobbyMembers} />
			</div>
		)
	} else if (status == "in-game") {
		return (
			<div className="App bg-darkest-blue h-screen">
				<Title name={ownName} />
				<GameScreen />
			</div>
		)
	} else {
		alert("Status Error! Status = " + status)
	}
}

export default App
