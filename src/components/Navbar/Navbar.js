import React from "react";
import "./Navbar.css";
import BigLogo from "../../assets/images/Enigma.png";
import SmallLogo from "../../assets/images/LogoOnlyEnigma.png";

import ProfileButton from "../ProfileButton/ProfileButton";
import { useLocation, Link } from "react-router-dom";

function Navbar(props) {
	// const history = useHistory();
	const location = useLocation();

	// const handleButtonClick = (page) => {
	// 	history.push("./auctions");
	// };
	return (
		<div className="NavBar">
			<div className="NavBar__LeftSide">
				{/* Current page: {location.pathname} */}
				<Link to="/">
					<img src={SmallLogo} height={"24px"} alt="EnigmaBid logo" />
				</Link>
				<Link className="LeftSide__Link" to="/">
					Home
				</Link>
				<Link className="LeftSide__Link" to="/auctions">
					Auctions
				</Link>
				<Link className="LeftSide__Link" to="/auctions/create">
					Create Auction
				</Link>
			</div>
			<ProfileButton />
		</div>
	);
}

export default Navbar;
