import React from "react";
import "./recommendationResult.css";

const sonycamera = () => {
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
					src="https://www.dpreview.com/files/p/E~products/sony_a6000/shots/068c499f89b049b5a3d26be9510f7c27.png"
					alt="Camera Diagram"
				/>
				<div className="recommendation-tag">Recommend this camera</div>
			</div>
			<div className="footer">Sony Alpha a6000</div>
		</div>
	);
};

export default sonycamera;
