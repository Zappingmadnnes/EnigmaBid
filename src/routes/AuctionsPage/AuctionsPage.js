import React from "react";
import "./AuctionsPage.css";

import Navbar from "../../components/Navbar/Navbar";
import TagSelector from "../../components/TagSelector/TagSelector";
import RangeSelector from "../../components/RangeSelector/RangeSelector";
import ItemCard from "../../components/ItemCard/ItemCard";

function AuctionsPage(props) {
	return (
		<div className="Background">
			<Navbar />
			<div className="AuctionPage">
				<div className="AuctionPage__Sidebar">
					<label>Tags:</label>
					<TagSelector />
					<label>Starting bid:</label>
					<RangeSelector type={"number"} />
					<label>Time posted:</label>
					<RangeSelector type={"date"} />
					<label>Time remaining:</label>
					<RangeSelector type={"number"} />
				</div>
				<div className="AuctionPage__Content">
					<ItemCard />
				</div>
			</div>
		</div>
	);
}

export default AuctionsPage;
