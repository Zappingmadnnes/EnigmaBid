import React, { useState } from "react";
import "./Sort.css";
import { BsArrowDown, BsArrowUp, BsArrowDownUp } from "react-icons/bs";

function Sort({ options, defaultOption, onChange }) {
	const [selectedOption, setSelectedOption] = useState(defaultOption);
	const [sortMode, setSortMode] = useState(false);

	const handleOptionClick = (option) => {
		if (option === selectedOption) {
			setSortMode(!sortMode);
		}
		setSelectedOption(option);
		onChange(option);
	};

	const renderButtons = () => (
		<div className="sort-buttons">
			<BsArrowDownUp
				style={{
					color: "#00965f",
					fontSize: "x-large",
					marginRight: "8px",
				}}
			/>
			{options.map((option) => (
				<button
					className={`sort-button ${
						option === selectedOption ? "selected" : ""
					}`}
					key={option}
					onClick={() => handleOptionClick(option)}
				>
					{option}
					{option === selectedOption ? (
						sortMode ? (
							<BsArrowDown />
						) : (
							<BsArrowUp />
						)
					) : null}
				</button>
			))}
		</div>
	);

	const renderDropdown = () => (
		<select
			className="sort-dropdown"
			value={selectedOption}
			onChange={(event) => handleOptionClick(event.target.value)}
		>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);

	return (
		<div className="sort-container">
			{renderButtons()}
			{renderDropdown()}
		</div>
	);
}

export default Sort;
