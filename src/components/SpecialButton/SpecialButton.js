import React from "react";
import "./SpecialButton.css";
function SpecialButton({ text, action }) {
	return (
		<button className="SpecialButton" onClick={action}>
			{text}
		</button>
	);
}

export default SpecialButton;
