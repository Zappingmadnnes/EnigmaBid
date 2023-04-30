import React, { useState } from "react";
import "./ImagePicker.css";

import ImageUploading from "react-images-uploading";
import { BsTrash } from "react-icons/bs";
function ImagePicker({ onChange, images }) {
	// const [images, setImages] = useState([]);
	const maxNumber = 6;

	return (
		<div className="ImagePicker">
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url"
			>
				{({
					imageList,
					onImageUpload,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
					<div>
						<button
							className="UploadImage__Btn"
							style={
								isDragging
									? { transform: "scale(0.9)" }
									: undefined
							}
							onClick={onImageUpload}
							{...dragProps}
						>
							Click or drag images
						</button>
						{imageList.length > 0 ? (
							<div className="UploadImage__Wrapper">
								{imageList.map((image, index) => (
									<div key={index} className="ImageItem">
										<div className="ImageItem__Image">
											<img
												src={image["data_url"]}
												alt=""
												width="184"
												// height="184"

												style={{ position: "absolute" }}
											/>
										</div>
										<div className="ImageItem__BtnWrapper">
											<button
												className="ImageItem__Btn"
												onClick={() =>
													onImageRemove(index)
												}
											>
												<BsTrash />
											</button>
										</div>
									</div>
								))}
							</div>
						) : null}
					</div>
				)}
			</ImageUploading>
		</div>
	);
}

export default ImagePicker;
