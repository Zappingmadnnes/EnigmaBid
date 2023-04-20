import React, { useState, useEffect } from "react";
import "./ProfileButton.css";

import Web3 from "web3";

import Popup from "reactjs-popup";

function ProfileButton() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [address, setAddress] = useState(null);

	// Check for address in local storage
	useEffect(() => {
		const storedAddress = localStorage.getItem("EnigmaBidAddress");
		if (storedAddress) {
			setAddress(storedAddress);
			setLoggedIn(true);
		}
	}, []);

	async function handleConnect() {
		// Check if MetaMask is installed
		if (typeof window.ethereum !== "undefined") {
			// Request access to the user's MetaMask account
			try {
				await window.ethereum.enable();
				const web3 = new Web3(window.ethereum);
				// Retrieve the user's address
				const accounts = await web3.eth.getAccounts();
				//Store in address in local storage
				localStorage.setItem("EnigmaBidAddress", accounts[0]);
				setAddress(accounts[0]);
				setLoggedIn(true);
			} catch (error) {
				console.error(error);
			}
		} else {
			console.error("MetaMask is not installed");
		}
	}

	return (
		<>
			{loggedIn ? (
				<Popup
					arrowStyle={{
						WebkitAnimation:
							"anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards",
						color: "rgba(50, 50, 50, 0.4)",
					}}
					trigger={
						<button className="SpecialButton">
							{address.slice(0, 6) + "..." + address.slice(-4)}
						</button>
					}
					position="bottom right"
				>
					<div className="ProfilePopup">Popup content here !!</div>
				</Popup>
			) : (
				<button
					className="SpecialButton"
					onClick={() => handleConnect()}
				>
					Connect MetaMask
				</button>
			)}
		</>
	);
}

export default ProfileButton;
