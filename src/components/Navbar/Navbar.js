import React from "react";
import "./Navbar.css";
import BigLogo from "../../assets/images/Enigma.png";
import SmallLogo from "../../assets/images/LogoOnlyEnigma.png";

import SpecialButton from "../SpecialButton/SpecialButton";
import ProfileButton from "../ProfileButton/ProfileButton";

function Navbar(props) {
	return (
		<div className="NavBar">
			<img src={SmallLogo} height={"24px"} />
			<ProfileButton />
		</div>
	);
}

export default Navbar;
