import React from "react";
import "./recommendationResult.css";

const nikondslr = () => {
	return (
		<div className="container">
			<div className="header">
				<h1>All about Camera: For Beginners</h1>
				<div>
					Camera / Recommendation Service / Photography / Photo
					Gallery
				</div>
			</div>
			<div className="camera-diagram">
				<img
					src="https://www.nikon-image.co.kr/upload/new_prdt/NK0001380/NK0001380_Image_middle1.png"
					alt="Camera Diagram"
				/>
				<div className="recommendation-tag">Recommend this camera</div>
			</div>
			<div className="footer">Nikon D3500</div>
		</div>
	);
};

export default nikondslr;
