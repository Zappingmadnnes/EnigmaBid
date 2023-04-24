import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
function NotFoundPage(props) {
	return (
		<div className="Background">
			<Navbar />
			<h1 className="Background__h1">Something went wrong</h1>
			<h2 className="Background__h2">Page not found</h2>
			<Link to="/" className="Link">
				Return home
			</Link>
		</div>
	);
}

export default NotFoundPage;
