import React from "react";
import { useParams } from "react-router-dom";
import "./ItemPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Time from "../../components/Time/Time";
import SpecialButton from "../../components/SpecialButton/SpecialButton";
function ItemPage(props) {
	const navigate = useNavigate();
	const { auctionId } = useParams();
	return (
		<div className="Background">
			<Navbar />
			<div className="ItemPage">
				<div className="ItemPage__Corner">
					<BsArrowReturnLeft onClick={() => navigate(-1)} />
				</div>
				<div className="ItemPage__Header">
					<div>Auction ID: #{auctionId}</div>
					<Time />
				</div>
				<div className="ItemPage__SideBar"></div>
				<div className="ItemPage__Content">
					<SpecialButton text={"Place bid"} />
				</div>
			</div>
		</div>
	);
}

export default ItemPage;
