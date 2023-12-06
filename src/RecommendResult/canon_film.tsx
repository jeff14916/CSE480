import React from "react";
import "./recommendationResult.css";

const Canonfilm = () => {
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
					src="https://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/0goAAOSwPDFimlhD/$_57.JPG?set_id=880000500F"
					alt="Camera Diagram"
				/>
				<div className="recommendation-tag">Recommend this camera</div>
			</div>
			<div className="footer">Canon AE-1</div>
		</div>
	);
};

export default Canonfilm;
