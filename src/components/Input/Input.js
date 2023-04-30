import React from "react";
import "./Input.css";

function Input({ placeholder, value, onChange, name, type, width, height }) {
	return (
		<div>
			<input
				className="Input"
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				name={name}
				style={{ width: width, height: height }}
			/>
		</div>
	);
}

export default Input;
