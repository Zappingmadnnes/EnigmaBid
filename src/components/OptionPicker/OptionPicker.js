import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import "./OptionPicker.css";
function OptionPicker({ options }) {
	const [selected, setSelected] = useState({});
	const handleInputChange = (option) => {
		console.log(selected);
		setSelected({
			...selected,
			[option]: !selected[option],
		});
		console.log(selected);
	};
	return (
		<div className="OptionPicker">
			{options.map((option) => (
				<div className="Option">
					<div
						className="Option__Checkbox"
						onClick={() => handleInputChange(option)}
					>
						{selected[option] ? <BsCheck size={30} /> : null}
					</div>
					{option}
				</div>
			))}
		</div>
	);
}

export default OptionPicker;
