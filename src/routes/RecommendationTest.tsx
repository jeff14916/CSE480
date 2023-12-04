import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./RecommendationTest.module.css";
import axios from "axios";

const RecommendationTest = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();

	const onSubmit = async (data: any) => {
		try {
			const response = await axios.post(
				"https://your-api-gateway-url",
				{
					formData: data,
				},
				{
					headers: {
						Authorization: "Bearer YOUR_COGNITO_TOKEN", // Replace with the actual token
					},
				}
			);

			navigate("/recommend/result", { state: { result: response.data } });
		} catch (error) {
			console.error("Error sending data to backend", error);
		}
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
