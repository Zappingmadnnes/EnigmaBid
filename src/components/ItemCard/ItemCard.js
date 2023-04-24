import React from "react";
import "./ItemCard.css";

function ItemCard() {
	return (
		<div className="item-card">
			<div className="item-card__banner"></div>
			<div className="item-card__content"></div>
			<div className="content__title">Title</div>
			<div className="content__category">Category</div>
		</div>
	);
}

export default ItemCard;
