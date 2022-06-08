import React from "react"

export default function LobbyScreen(props) {
	function startGame() {
		const val = document.getElementById("roundsSelect").value
		props.startGameFunction(val)
	}

	return (
		<div className="flex flex-col justify-start items-center mt-8">
			<h1 className="text-center text-white text-2xl">{"Lobby: " + props.lobbyName}</h1>

			{/* Lobby Members */}
			<h1 className="mt-16 pb-2 text-center text-white text-2xl">Spieler:</h1>
			{props.members.map((e) => (
				<p key={e} className="text-white text-xl text-center">
					{e}
				</p>
			))}

			{/* Change Total Rounds */}
			<div className="flex flex-row text-white mt-16 items-center">
				<p className="mr-4">Choose rounds:</p>
				<select
					id="roundsSelect"
					className="text-darkest-blue p-2 w-20 rounded-xl text-center">
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={30}>30</option>
					<option value={40}>40</option>
					<option value={50}>50</option>
				</select>
			</div>

			{/* Start Game Button */}
			<button
				onClick={startGame}
				className="mt-16 transition-all bg-blue py-2 w-40 rounded-xl ml-4 text-white shadow-xl border-blue border-2 hover:border-white hover:bg-darkest-blue">
				Spiel starten
			</button>
		</div>
	)
}
