import React from "react"

export default function LobbyScreen(props) {
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

			{/* Start Game Button */}
			<button
				onClick={props.startGameFunction}
				className="mt-16 transition-all bg-blue py-2 w-40 rounded-xl ml-4 text-white shadow-xl border-blue border-2 hover:border-white hover:bg-darkest-blue">
				Spiel starten
			</button>
		</div>
	)
}
