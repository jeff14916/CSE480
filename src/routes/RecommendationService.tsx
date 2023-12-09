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
			<div className={styles.text}>
				<h1>Which camera is right for me?</h1>
				<h4>
					worried about having too many camera products? Get a
					recommendation for the camera that's right for you by
					answering a few questions!
				</h4>
				<button onClick={test} className={styles.Button}>
					GO TEST
				</button>
			</div>
		</div>
	);
};

export default RecommendationService;
