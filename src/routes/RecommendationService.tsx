import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecommendationService.module.css";

const RecommendationService = () => {
	document.title = "Recommendation Service";
	const navigate = useNavigate();
	const test = async () => {
		navigate("/recommend/test");
	};
	return (
		<div className={styles.content}>
			<h1>Which camera is right for me?</h1>
			<p>
				worried about having too many camera products? Get a
				recommendation for the camera that's right for you by answering
				a few questions!
			</p>
			<p> currently on development </p>
			<button onClick={test}>GO TEST</button>
		</div>
	);
};

export default RecommendationService;
