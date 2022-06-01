import React from "react"

export default function LobbyScreen(props) {
	console.log(props)
	return (
		<div className="flex flex-col justify-start items-center mt-8">
			<h1 className="text-center text-white text-2xl">
				{"Lobby: " + props.lobbyName}
			</h1>

			{/* Lobby Members */}
			<h1 className="mt-16 text-center text-white text-2xl">Spieler:</h1>
			{props.members.map((e) => (
				<p className="text-white text-xl text-center">{e}</p>
			))}
		</div>
	)
}
