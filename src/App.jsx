import { useEffect, useState } from "react";
import data from "./sampleData.json";
import "./App.css";
import GameScreen from "./GameScreen/GameScreen";

function App() {
	const [questionData, setQuestionData] = useState(data.current_question);
	const [playerData, setPlayerData] = useState(data.player_scores);
	const [roundData, setRoundData] = useState(data.round_info);

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
			<GameScreen
				questions={questionData}
				players={playerData}
				rounds={roundData}
			/>
			<button onClick={addPlayer}>Add Player</button>
		</div>
	);
}

export default App;
