import React, { useEffect, useState } from "react";
import "./AuctionsPage.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import Navbar from "../../components/Navbar/Navbar";
import TagSelector from "../../components/TagSelector/TagSelector";
import RangeSelector from "../../components/RangeSelector/RangeSelector";
import ItemCard from "../../components/ItemCard/ItemCard";
import Time from "../../components/Time/Time";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";

function AuctionsPage(props) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getDocs(collection(db, "auctions"));
			setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		fetchData();
	}, []);

	return (
		<div className="Background">
			<Navbar />
			<div className="AuctionPage">
				<div className="AuctionPage__Sidebar">
					<label>Tags:</label>
					<TagSelector placeholder={"Search for tags..."} />
					<label>Starting bid:</label>
					<RangeSelector type={"number"} />
					<label>Age:</label>
					<RangeSelector type={"date"} />
					<label>Hours remaining:</label>
					<RangeSelector type={"number"} />
				</div>
				<div className="AuctionPage__Content">
					{data.map((item) => (
						<ItemCard
							key={item.id}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
				<div className="AuctionPage__Header">
					<div className="Header__Sort">
						<Search />
						<div style={{ margin: "0px 16px" }} />
						<Sort
							options={["Starting Bid", "Time Left", "Age "]}
							defaultOption="Starting Bid"
							onChange={(e) => console.log(e)}
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
