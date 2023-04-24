import React from "react";
import "./AuctionsPage.css";

import Navbar from "../../components/Navbar/Navbar";
import TagSelector from "../../components/TagSelector/TagSelector";
import RangeSelector from "../../components/RangeSelector/RangeSelector";
import ItemCard from "../../components/ItemCard/ItemCard";
import Time from "../../components/Time/Time";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";

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
					<label>Hours remaining:</label>
					<RangeSelector type={"number"} />
				</div>
				<div className="AuctionPage__Content">
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
				</div>
				<div className="AuctionPage__Header">
					<div>
						<Search />
						<Sort
							options={["Option 1", "Option 2", "Option 3"]}
							defaultOption="Option 1"
							onSelect={(e) => console.log(e)}
						/>
					</div>
					<Time />
				</div>
				<div className="AuctionPage__Title">Auctions</div>
			</div>
		</div>
	);
}

export default AuctionsPage;
