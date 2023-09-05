import React, { useState } from "react";
import "./CreatePage.css";
import SpecialButton from "../../components/SpecialButton/SpecialButton";
import Input from "../../components/Input/Input";
import TagSelector from "../../components/TagSelector/TagSelector";
import ItemCard from "../../components/ItemCard/ItemCard";
import Navbar from "../../components/Navbar/Navbar";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import Time from "../../components/Time/Time";
import OptionPicker from "../../components/OptionPicker/OptionPicker";
import { storage } from "../../firebase";

function CreatePage(props) {
	const [details, setDetails] = useState({
		title: "",
		description: "",
		contractTransferable: false,
		tags: [],
		minimumBid: 0,
		duration: 0,
		upfrontPay: false,
		multiBid: false,
		combineBids: false,
		id: 42069,
	});

	//////////////////////////////

	const [images, setImages] = useState([]);

	const onImageChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	//////////////////////////////////

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setDetails({
			...details,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const docRef = await addDoc(collection(db, "auctions"), {
				title: details.title,
				description: details.description,
				imageUrl: details.imageUrl,
				createdAt: serverTimestamp(),
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<div className="Background">
			<Navbar />
			<div className="CreatePage">
				<div className="CreatePage__Title">Preview</div>
				<div className="CreatePage__Header">
					Auction creation
					<Time />
				</div>
				<div className="CreatePage__Preview">
					<div style={{ borderBottom: "2px solid #00965f" }}>
						<ItemCard details={details} image={images[0]} />
					</div>
					<div
						style={{
							width: "300px",
							marginTop: "16px",
						}}
					>
						<TagSelector placeholder={"Choose tags..."} />
					</div>
				</div>
				<div className="CreatePage__Fields">
					<form onSubmit={handleSubmit}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								marginRight: "32px",
							}}
						>
							<div className="CreatePage__InputTitle">Title</div>
							<Input
								name={"title"}
								type={"text"}
								placeholder={"Item name..."}
								value={details.title}
								onChange={handleInputChange}
							/>
							<div className="CreatePage__InputTitle">
								Description
							</div>

							<textarea
								name={"description"}
								placeholder={"Item description..."}
								value={details.description}
								onChange={handleInputChange}
							/>
							<OptionPicker options={["Digital", "Physical"]} />
							<SpecialButton
								action={handleSubmit}
								text={"Create auction"}
							/>
						</div>
					</form>
				</div>
				<div className="CreatePage__Images">
					<ImagePicker onChange={onImageChange} images={images} />
				</div>
			</div>
		</div>
	);
}

export default CreatePage;

// ---User decided variables---
// Item title
// Item description
// Type of item (digital or phyisical e.g can or can't be transfered through smart contract)
// Item tags
// Item pictures (generic if no picture provided)
// Minimum bid
// Duration
// Pay upfront or later
// Allow multiple bids from one user
// Combine multiple bids in one or keep them seperate

// ---Automatically gathered variables
// Creator address
// Date of creation
// ID
