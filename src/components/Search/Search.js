import React, { useRef } from "react";
import "./Search.css";
function Search() {
	const inputRef = useRef(null);

	const handleInputClick = () => {
		inputRef.current.select();
	};

	return (
		<div>
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
