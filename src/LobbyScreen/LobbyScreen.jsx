import React from "react";

export default function LobbyScreen(props) {
	console.log(props);
	return (
		<div className="flex flex-col justify-start items-center mt-8">
			<h1 className="text-center text-white text-2xl">
				{"Lobby: " + props.lobbyName.lobby_name}
			</h1>
		</div>
	);
}
