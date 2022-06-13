import React from "react";

export default function LandingScreen(props) {
	function joinLobby() {
		const lobbyCode = document.getElementById("lobby-code-input").value;
		document.getElementById("lobby-code-input").value = "";
		props.joinFunction(lobbyCode);
	}

	function changeName() {
		const name = document.getElementById("lobby-name-input").value;
		document.getElementById("lobby-name-input").value = "";
		props.changeNameFunction(name);
	}

	return (
		<div className="flex flex-col justify-start items-center mt-16">
			{/* Change Player Name */}
			<div>
				<input
					id="lobby-name-input"
					type="text"
					className="py-2 px-4 rounded-xl text-darkest-blue w-64 transition-all shadow-xl"
					placeholder="Gib deinen Namen ein ..."
				/>
				<button
					onClick={changeName}
					className="transition-all bg-blue py-2 w-40 rounded-xl ml-4 text-white shadow-xl border-blue border-2 hover:border-white hover:bg-darkest-blue">
					Namen ändern
				</button>
			</div>

			{/* Join Lobby */}
			<div className="mt-8">
				<input
					id="lobby-code-input"
					type="text"
					className="py-2 px-4 rounded-xl text-darkest-blue w-64 transition-all shadow-xl"
					placeholder="Gib den Lobby-Code ein ..."
				/>
				<button
					onClick={joinLobby}
					className="transition-all bg-blue py-2 w-40 rounded-xl ml-4 text-white shadow-xl border-blue border-2 hover:border-white hover:bg-darkest-blue">
					Lobby beitreten
				</button>
			</div>
		</div>
	);
}
