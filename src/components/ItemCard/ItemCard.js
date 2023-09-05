import React from "react";
import "./ItemCard.css";
import { useNavigate } from "react-router-dom";

function ItemCard({ title, description, image }) {
	const navigate = useNavigate();
	const id = 3;
	// return (
	// 	<div className="item-card">
	// 		<div className="item-card__banner"></div>
	// 		<div className="item-card__content"></div>
	// 		<div className="content__title">Title</div>
	// 		<div className="content__category">Category</div>
	// 	</div>
	// );
	return (
		<div className="item-card" onClick={() => navigate(`/auctions/${id}`)}>
			<div
				className="item-card__image"
				style={
					image
						? {
								backgroundImage: `url(${image.data_url})`,
						  }
						: {
								backgroundImage: `url('https://picsum.photos/1000/1000?random=${Math.floor(
									Math.random() * 100
								)}')`,
						  }
				}
			>
				<div className="item-card__overlay">
					{title ? (
						<>
							<h2 className="item-card__title">
								{title.substr(0, 40)}
							</h2>
							<p className="item-card__description">
								{description.length > 200
									? description.substr(0, 200) + "..."
									: description}
							</p>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default ItemCard;
