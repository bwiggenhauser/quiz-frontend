import { useEffect, useState } from "react";
import data from "./sampleData.json";
import "./App.css";
import GameScreen from "./GameScreen/GameScreen";

function App() {
	const [questionData, setQuestionData] = useState(data.current_question);
	const [playerData, setPlayerData] = useState(data.player_scores);
	const [roundData, setRoundData] = useState(data.round_info);

	console.log(data);
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
		</div>
	);
}

export default App;
