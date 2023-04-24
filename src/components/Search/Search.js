import React, { useRef } from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
function Search() {
	const inputRef = useRef(null);

	const handleInputClick = () => {
		inputRef.current.select();
	};

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<BsSearch
				style={{
					color: "#00965f",
					fontSize: "x-large",
					marginRight: "12px",
				}}
			/>
			<input
				className="search"
				type="search"
				placeholder="Search..."
				ref={inputRef}
				onClick={handleInputClick}
			/>
		</div>
	);
}

export default Search;
