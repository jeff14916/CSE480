import React from "react";
import "./recommendationResult.css";

const nikonmirrorless = () => {
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
					src="https://www.nikon-image.co.kr/upload/new_prdt/NK0001404/img/img_07.jpg"
					alt="Camera Diagram"
				/>
				<div className="recommendation-tag">Recommend this camera</div>
			</div>
			<div className="footer">Nikon Z50</div>
		</div>
	);
};

export default nikonmirrorless;
