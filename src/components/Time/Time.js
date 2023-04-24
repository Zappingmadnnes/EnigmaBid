import React, { useState, useEffect } from "react";
import "./Time.css";

function Time(props) {
	const [currentTime, setCurrentTime] = useState(
		new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
		})
	);

	useEffect(() => {
		const timerID = setInterval(() => {
			setCurrentTime(
				new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					hour12: false,
				})
			);
		}, 1000);

		return () => {
			clearInterval(timerID);
		};
	}, []);

	return <div className="Time">{currentTime}</div>;
}

export default Time;
