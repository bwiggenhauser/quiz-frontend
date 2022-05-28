import React from "react";

export default function Answer(props) {
	return (
		<div className="flex justify-center items-center border-2 border-white w-4/5 h-16 mb-8 rounded-xl hover:bg-white hover:text-darkest-blue transition-all cursor-pointer">
			<p>{props.text}</p>
		</div>
	);
}
