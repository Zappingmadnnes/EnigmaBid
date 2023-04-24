import React, { useState } from "react";
import "./RangeSelector.css";
function RangeSelector({ type }) {
	const [minNumber, setminNumber] = useState();
	const [maxNumber, setMaxNumber] = useState();

	const handleminNumberChange = (event) => {
		setminNumber(parseInt(event.target.value));
	};

	const handlemaxNumberChange = (event) => {
		setMaxNumber(parseInt(event.target.value));
	};

	function handleBlur(event) {
		if (
			event.target.name === "minNumber" &&
			parseInt(event.target.value) > maxNumber
		) {
			setMaxNumber(minNumber);
		} else if (
			event.target.name === "maxNumber" &&
			parseInt(event.target.value) < minNumber
		) {
			setMaxNumber(minNumber);
		}
	}

	return (
		<div className="range-selector">
			<input
				type={type}
				id="minNumber"
				name="minNumber"
				value={minNumber}
				onChange={handleminNumberChange}
				onBlur={handleBlur}
			/>
			<div
				style={{
					borderTop: "1px solid #00965f",
					borderBottom: "1px solid #00965f",
					width: "10px",
				}}
			/>
			<input
				type={type}
				id="maxNumber"
				name="maxNumber"
				value={maxNumber}
				onChange={handlemaxNumberChange}
				onBlur={handleBlur}
			/>
		</div>
	);
}

export default RangeSelector;
