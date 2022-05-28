import { useState } from "react";
import data from "./sampleData.json";
import "./App.css";
import GameScreen from "./GameScreen/GameScreen";

function App() {
	console.log(data);
	return (
		<div className="App bg-darkest-blue h-screen">
			<h1 className="text-white text-6xl font-extrabold text-center pt-8 pb-8">Quiz.io</h1>
			<GameScreen data={data} />
		</div>
	);
}

export default App;
