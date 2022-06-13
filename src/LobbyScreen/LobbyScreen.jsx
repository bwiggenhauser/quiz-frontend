import React from "react"

export default function LobbyScreen(props) {
	function startGame() {
		const val = document.getElementById("roundsSelect").value
		props.startGameFunction(val)
	}

	function changeTotalRounds() {
		const val = document.getElementById("roundsSelect").value
		props.changeLobbyTotalRoundsFunction(val)
	}

	return (
		<div className="flex flex-col justify-start items-center mt-8">
			<div className="flex flex-col items-center bg-dark-blue w-1/5 py-8 rounded-xl shadow-xl">
				<h1 className="text-2xl text-white font-bold">Lobby Settings</h1>
				<div className="flex flex-col items-start">
					<h1 className="text-center text-white text-base pt-8">
						{"Lobby name: " + props.lobbyName}
					</h1>

					{/* Change Total Rounds */}
					<div className="flex flex-row text-white items-center pt-2">
						<p className="text-base mr-2">Total rounds:</p>
						<select
							id="roundsSelect"
							className="text-darkest-blue py-1 w-16 rounded-xl text-center"
							value={props.totalRounds}
							onChange={changeTotalRounds}>
							<option value={5}>5</option>
							<option value={10}>10</option>
							<option value={20}>20</option>
							<option value={30}>30</option>
							<option value={40}>40</option>
							<option value={50}>50</option>
						</select>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center bg-dark-blue w-1/5 py-8 rounded-xl shadow-xl mt-8">
				{/* Lobby Members */}
				<h1 className="text-2xl text-white font-bold">Players</h1>
				<div className="pt-8 flex items-start flex-col">
					{props.members.map((e) => (
						<p key={e} className="text-white text-base text-center py-1">
							{e}
						</p>
					))}
				</div>
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
