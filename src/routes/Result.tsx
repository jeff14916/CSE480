import React from "react";
import styles from "./Result.module.css";
import { useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import ResultData from "./ResultData";

const Result = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const param = queryParams.get("param");
	const { isAuthenticated } = useAuth();
	let imgsrc = "";
	let cameraname = "";
	[imgsrc, cameraname] = ResultData(param);
	return (
		<div className={styles.container}>
			<h3 className={styles.tag}> We Recommend.. </h3>
			<h3 className={styles.footer}>{cameraname}</h3>
			<div className={styles.diagram}>
				<img src={imgsrc} alt="Camera Diagram" />
			</div>
			{isAuthenticated && (
				<p className={styles.footer}>Saved the result to My Page!</p>
			)}
		</div>
	);
};

export default Result;
