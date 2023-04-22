import React from "react";
import "./LandingPage.css";
import BigLogo from "../../assets/images/Enigma.png";

import { TypeAnimation } from "react-type-animation";

import Navbar from "../../components/Navbar/Navbar";

function LandingPage() {
	return (
		<div className="LandingPage">
			<Navbar />
			<div className="TitleContainer">
				<img src={BigLogo} alt="EnigmaBid logo" width={"80%"} />
				<TypeAnimation
					className="TitleContainer__descritption"
					sequence={[
						// Same String at the start will only be typed once, initially
						"The fully anonymous, secure, and private zero-knowledge-proof blind auction site. Bid with complete confidence, security and privacy.",
					]}
					speed={65}
					cursor={false}
				/>
			</div>
		</div>
	);
}

export default LandingPage;
