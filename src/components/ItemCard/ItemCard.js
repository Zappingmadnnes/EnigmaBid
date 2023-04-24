import React from "react";
import "./ItemCard.css";

function ItemCard() {
	// return (
	// 	<div className="item-card">
	// 		<div className="item-card__banner"></div>
	// 		<div className="item-card__content"></div>
	// 		<div className="content__title">Title</div>
	// 		<div className="content__category">Category</div>
	// 	</div>
	// );
	return (
		<div className="item-card">
			<div
				className="item-card__image"
				style={{
					backgroundImage: `url('https://picsum.photos/1000/1000?random=${Math.floor(
						Math.random() * 100
					)}')`,
				}}
			>
				<div className="item-card__overlay">
					<h2 className="item-card__title">
						Auction item title goes here
					</h2>
					<p className="item-card__description">
						This item is on auction. lorem ipsum smthn smthn smthn
					</p>
				</div>
			</div>
		</div>
	);
}

export default ItemCard;
