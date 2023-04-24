import React, { useState, useRef, useEffect } from "react";
import "./TagSelector.css";

function TagSelector(props) {
	const [selectedTags, setSelectedTags] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const tagListRef = useRef(null);
	const inputRef = useRef(null);

	const tags = [
		"Mobile-first design",
		"Responsive",
		"Animation",
		"Modern",
		"Minimalistic",
		"Full-stack",
		"Performance",
		"SEO-friendly",
		"Progressive Web App",
		"Cross-browser compatible",
		"REST API",
		"Real-time",
		"Authentication",
		"Database",
		"ORM",
		"Bootstrap",
		"Material Design",
		"UX/UI",
		"Accessibility",
		"ES6+",
		"TypeScript",
		"Webpack",
		"Babel",
		"Code splitting",
		"GraphQL",
		"Testing",
		"CI/CD",
		"AWS",
		"Google Cloud Platform",
		"Azure",
		"Docker",
		"Kubernetes",
		"Microservices",
		"Serverless",
		"Blockchain",
		"Cryptocurrency",
		"NFT",
		"Gamification",
	];

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	});

	const handleTagSelection = (tag) => {
		if (selectedTags.includes(tag)) {
			setSelectedTags(
				selectedTags.filter((selectedTag) => selectedTag !== tag)
			);
		} else {
			setSelectedTags([...selectedTags, tag]);
		}
		setIsFocused(true);
		setInputValue("");
		inputRef.current.focus();
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
		setIsFocused(true);
	};

	const handleClick = (event) => {
		if (
			tagListRef.current &&
			!tagListRef.current.contains(event.target) &&
			!inputRef.current.contains(event.target)
		) {
			setIsFocused(false);
		}
	};

	const filteredTags = tags.filter((tag) =>
		tag.toLowerCase().includes(inputValue.toLowerCase())
	);

	return (
		<div className="tag-selector">
			<input
				type="text"
				placeholder="Search tags"
				value={inputValue}
				onChange={handleInputChange}
				onFocus={() => setIsFocused(true)}
				ref={inputRef}
			/>
			{isFocused && inputValue.length >= 0 && (
				<div className="tag-list" ref={tagListRef}>
					{filteredTags.length > 0
						? filteredTags.map((tag) => (
								<div
									key={tag}
									className={`tag ${
										selectedTags.includes(tag)
											? "selected"
											: ""
									}`}
									onClick={() => handleTagSelection(tag)}
								>
									{tag}
								</div>
						  ))
						: "No tags found"}
				</div>
			)}
		</div>
	);
}

export default TagSelector;
