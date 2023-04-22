import React from "react";
import "./AuctionsPage.css";

import Navbar from "../../components/Navbar/Navbar";
import TagSelector from "../../components/TagSelector/TagSelector";

function AuctionsPage(props) {
	return (
		<div className="Background">
			<Navbar />
			<div className="AuctionPage">
				<div className="AuctionPage__Sidebar">
					<TagSelector />
				</div>
			</div>
		</div>
	);
}

export default AuctionsPage;
