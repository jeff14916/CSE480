import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./RecommendationTest.module.css";
import { useAuth } from "../AuthContext";
import { updateUserAttribute } from "aws-amplify/auth";

const RecommendationTest = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const { isAuthenticated } = useAuth();

	const onSubmit = (data: any) => {
		console.log(data);
		let param = 0;
		if (data.brand === "Canon") {
			param += 1000;
		}
		if (data.brand === "Sony") {
			param += 2000;
		}
		if (data.brand === "Nikon") {
			param += 3000;
		}
		if (data.brand === "No preference") {
			param += 4000;
		}
		if (data.cameraType === "DSLR") {
			param += 100;
		}
		if (data.cameraType === "Mirrorless") {
			param += 200;
		}
		if (data.cameraType === "Film") {
			param += 300;
		}
		if (isAuthenticated) {
			UpdateAttributes(param);
		}
		navigate(`/recommend/result?param=${param}`);
	};
	const UpdateAttributes = async (param: number) => {
		const valu = param.toString();
		await updateUserAttribute({
			userAttribute: {
				attributeKey: "custom:result",
				value: valu,
			},
		});
	};

	return (
		<div className={styles.content}>
			<h1>Which camera is right for me?</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<p>1. What brand of products are you looking for?</p>
					<select {...register("brand")}>
						<option value="Canon">Canon</option>
						<option value="Sony">Sony</option>
						<option value="Nikon">Nikon</option>
						<option value="No preference">No preference</option>
					</select>
				</div>

				<div>
					<p>2. What type of camera are you interested in?</p>
					<select {...register("cameraType")}>
						<option value="DSLR">DSLR Camera</option>
						<option value="Mirrorless">Mirrorless Camera</option>
						<option value="Film">Film Camera</option>
					</select>
				</div>

				<div>
					<p>3. What kind of photos do you primarily take?</p>
					<select {...register("photoType")}>
						<option value="Landscape">Landscape</option>
						<option value="Portrait">Portrait</option>
						<option value="Thing">Thing</option>
					</select>
				</div>

				<div>
					<p>4. What price range are you considering for a camera?</p>
					<select {...register("priceRange")}>
						<option value="Under 500">Under 500 dollars</option>
						<option value="500 to 1000">
							Between 500 and 1000 dollars
						</option>
						<option value="Over 1000">Over 1000 dollars</option>
					</select>
				</div>

				<button type="submit">Find My Camera</button>
			</form>
		</div>
	);
};

export default RecommendationTest;
