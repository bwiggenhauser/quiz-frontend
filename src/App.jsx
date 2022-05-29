import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import data from "./sampleData.json";
import "./App.css";
import GameScreen from "./GameScreen/GameScreen";
import LandingScreen from "./LandingScreen/LandingScreen";

function App() {
	const [questionData, setQuestionData] = useState(data.current_question);
	const [playerData, setPlayerData] = useState(data.player_scores);
	const [roundData, setRoundData] = useState(data.round_info);
	const [socket, setSocket] = useState(null);

	const BACKEND_URL = "localhost:4005";

	useEffect(() => {
		const socket = io(BACKEND_URL);

		socket.on("test", (data) => {
			console.log(data);
		});

		socket.on("lobby-info", (data) => {
			console.log(data);
		});
		setSocket(socket);
		return () => socket.close();
	}, [setSocket]);

	function joinLobby(lobbyCode) {
		socket.emit("join-lobby", lobbyCode);
	}

	function addPlayer() {
		let current = playerData;
		current.push({
			place: 4,
			player: "Vimme",
			score: 7,
		});
		setPlayerData([...current]);
	}

	return (
		<div className="App bg-darkest-blue h-screen">
			<h1 className="text-white text-6xl font-extrabold text-center pt-8 pb-8">
				Quiz.io
			</h1>

			<LandingScreen joinFunction={joinLobby} />

			{/* <GameScreen
				questions={questionData}
				players={playerData}
				rounds={roundData}
			/>
			<button onClick={addPlayer}>Add Player</button> */}
		</div>
	);
}

export default App;
