import React from "react";

export default function LobbyScreen() {
	return (
		<div className="flex flex-col justify-start items-center mt-8">
			
            {/* Change Player Name */}
            <div>
				<input
					type="text"
					className="py-2 px-4 rounded-xl text-darkest-blue w-64 transition-all shadow-xl"
					placeholder="Gib deinen Namen ein ..."
				/>
				<button className="transition-all bg-blue py-2 w-40 rounded-xl ml-4 text-white shadow-xl border-blue border-2 hover:border-white hover:bg-darkest-blue">
					Namen ändern
				</button>
			</div>

            {/* Join Lobby */}
            <div className="mt-8">
				<input
					type="text"
					className="py-2 px-4 rounded-xl text-darkest-blue w-64 transition-all shadow-xl"
					placeholder="Gib den Lobby-Code ein ..."
				/>
				<button className="transition-all bg-blue py-2 w-40 rounded-xl ml-4 text-white shadow-xl border-blue border-2 hover:border-white hover:bg-darkest-blue">
					Lobby beitreten
				</button>
			</div>
		</div>
	);
}
