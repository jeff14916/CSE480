import React from "react";
import "./recommendationResult.css";

const nikonfilm = () => {
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
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nikon_F3_with_HP_viewfinder.jpeg/1200px-Nikon_F3_with_HP_viewfinder.jpeg"
					alt="Camera Diagram"
				/>
				<div className="recommendation-tag">Recommend this camera</div>
			</div>
			<div className="footer">Nikon F3</div>
		</div>
	);
};

export default nikonfilm;
