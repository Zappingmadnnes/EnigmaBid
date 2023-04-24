import React, { useState } from "react";

function Sort({ options, defaultOption, onSelect }) {
	const [selectedOption, setSelectedOption] = useState(defaultOption);

	const handleOptionSelect = (event) => {
		const option = event.target.value;
		setSelectedOption(option);
		onSelect(option);
	};

	return (
		<select value={selectedOption} onChange={handleOptionSelect}>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default Sort;
