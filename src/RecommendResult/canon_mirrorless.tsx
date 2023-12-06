import React from "react";
import "./recommendationResult.css";

const canonmirrorless = () => {
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
					src="https://www.tradeinn.com/f/13734/137344191/canon-%EC%82%AC%EC%95%85%ED%95%9C-%EC%B9%B4%EB%A9%94%EB%9D%BC-eos-m100-15-45-mm.jpg"
					alt="Camera Diagram"
				/>
				<div className="recommendation-tag">Recommend this camera</div>
			</div>
			<div className="footer">Canon EOS M100</div>
		</div>
	);
};

export default canonmirrorless;
