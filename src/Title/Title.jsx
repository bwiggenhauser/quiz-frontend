import React from "react";

export default function Title(props) {
	return (
		<div>
			<h1 className="text-white text-6xl font-extrabold text-center pt-8 pb-8">
				Quiz.io
			</h1>
			<p className="text-white text-base text-center">{props.name}</p>
		</div>
	);
}
