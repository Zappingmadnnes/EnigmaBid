import React, { useState } from "react";
import "./RangeSelector.css";
function RangeSelector({ type }) {
	const [minNumber, setminNumber] = useState(0);
	const [maxNumber, setMaxNumber] = useState(100);

	const handleminNumberChange = (event) => {
		setminNumber(event.target.value);
	};

	const handlemaxNumberChange = (event) => {
		setMaxNumber(event.target.value);
	};

	function handleBlur() {
		if (minNumber > maxNumber) {
			setMaxNumber(minNumber);
		} else if (maxNumber < minNumber) {
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
