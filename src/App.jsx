import { useState } from "react";
import data from "./sampleData.json";
import "./App.css";
import GameScreen from "./GameScreen/GameScreen";

function App() {
	console.log(data);
	return (
		<div className="App">
			<h1>Quiz.io</h1>
			<GameScreen data={data} />
		</div>
	);
}

export default App;
