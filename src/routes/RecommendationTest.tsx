import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./RecommendationTest.module.css";
import { useAuth } from "../AuthContext";
import { updateUserAttribute } from "aws-amplify/auth";

const RecommendationTest = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const { isAuthenticated } = useAuth();
	const [selectedBrand, setSelectedBrand] = useState("");
	const [selectedCameraType, setSelectedCameraType] = useState("");
	const [selectedPhotoType, setSelectedPhotoType] = useState("");
	const [selectedPriceRange, setSelectedPriceRange] = useState("");
	const handleBrandChange = (type: string) => setSelectedBrand(type);
	const handleCameraTypeChange = (type: string) => {
		setSelectedCameraType(type);
	};

	const handlePhotoTypeChange = (type: string) => setSelectedPhotoType(type);
	const handlePriceRangeChange = (type: string) =>
		setSelectedPriceRange(type);

	const onSubmit = (data: any) => {
		if (!selectedBrand || !selectedCameraType || !selectedPriceRange) {
			const msg =
				"You shoud answer Question" +
				(!selectedBrand ? " 1" : "") +
				(!selectedCameraType ? " 2" : "") +
				(!selectedPriceRange ? " 3" : "") +
				"  !";
			alert(msg);
			return;
		}
		let param = 0;
		if (selectedBrand === "Canon") {
			param += 1000;
		}
		if (selectedBrand === "Sony") {
			param += 2000;
		}
		if (selectedBrand === "Nikon") {
			param += 3000;
		}
		if (selectedBrand === "No preference") {
			param += 4000;
		}
		if (selectedCameraType === "DSLR") {
			param += 100;
		}
		if (selectedCameraType === "Mirrorless") {
			param += 200;
		}
		if (selectedCameraType === "Film") {
			param += 300;
		}
		if (selectedPhotoType === "Landscape") {
			param += 1;
		}
		if (selectedPhotoType === "Portrait") {
			param += 2;
		}
		if (selectedPhotoType === "Thing") {
			param += 3;
		}
		if (!selectedPhotoType) {
			param += 4;
		}
		if (selectedPriceRange === "Under 500$") {
			param += 10;
		}
		if (selectedPriceRange === "500$ to 1000$") {
			param += 20;
		}
		if (selectedPriceRange === "Over 1000$") {
			param += 30;
		}
		if (selectedPriceRange === "No preference") {
			param += 40;
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
	useEffect(() => {
		const a = () => {
			if (selectedBrand === "Sony") {
				setSelectedCameraType("Mirrorless");
			}
			if (
				selectedBrand === "Nikon" &&
				selectedCameraType === "Mirrorless" &&
				selectedPriceRange === "Under 500$"
			) {
				setSelectedPriceRange("");
			}
		};
		a();
	}, [selectedBrand, selectedCameraType, selectedPriceRange]);

	return (
		<div className={styles.content}>
			<div className={styles.text}>
				<h1>Which camera is right for me?</h1>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h4 className={styles.text}>
					1. Are you looking for specific brands? <br />
					If not, select No preference.
				</h4>
				<div className={styles.buttonGroup}>
					{["Canon", "Sony", "Nikon", "No preference"].map(
						(brand) => (
							<label
								key={brand}
								className={`${styles.buttonLabel} ${
									selectedBrand === brand
										? styles.selected
										: ""
								}`}
								onClick={() => {
									handleBrandChange(brand);
								}}
							>
								<input
									type="radio"
									value={brand}
									{...register("brand")}
									className={styles.hiddenRadio}
								/>
								{brand}
							</label>
						)
					)}
				</div>

				<h4 className={styles.text}>
					2. What type of camera are you interested in? ( Introduced
					in Camera part )
				</h4>
				<div className={styles.buttonGroup}>
					{["DSLR", "Mirrorless", "Film"].map((type) => (
						<label
							key={type}
							className={`${styles.buttonLabel} ${
								selectedCameraType === type
									? styles.selected
									: ""
							}`}
							onClick={() => {
								if (selectedBrand !== "Sony") {
									handleCameraTypeChange(type);
								}
							}}
						>
							<input
								type="radio"
								value={type}
								{...register("cameraType")}
								className={styles.hiddenRadio}
							/>
							{type}
						</label>
					))}
				</div>
				{selectedBrand === "Sony" && (
					<p className={styles.text}>
						Sony brand only has Mirrorless Camera.
					</p>
				)}
				<h4 className={styles.text}>
					3. What price range are you considering for a camera?
				</h4>
				<div className={styles.buttonGroup}>
					{["Under 500$", "500$ to 1000$", "Over 1000$"].map(
						(price) => (
							<label
								key={price}
								className={`${styles.buttonLabel} ${
									selectedPriceRange === price
										? styles.selected
										: ""
								}`}
								onClick={() => {
									if (
										selectedBrand !== "Nikon" ||
										selectedCameraType !== "Mirrorless" ||
										selectedPriceRange !== "Under 500$"
									) {
										handlePriceRangeChange(price);
									}
								}}
							>
								<input
									type="radio"
									value={price}
									{...register("priceRange")}
									className={styles.hiddenRadio}
								/>
								{price}
							</label>
						)
					)}
				</div>
				{selectedBrand === "Nikon" &&
					selectedCameraType === "Mirrorless" && (
						<p className={styles.text}>
							No under 500$ Camera for Nikon Mirrorless Camera!
						</p>
					)}
				<h4 className={styles.text}>
					4. (Optional) What kind of photos do you plan to take?
				</h4>
				<div className={styles.buttonGroup}>
					{["Landscape", "Portrait", "Thing"].map((kind) => (
						<label
							key={kind}
							className={`${styles.buttonLabel} ${
								selectedPhotoType === kind
									? styles.selected
									: ""
							}`}
							onClick={() => handlePhotoTypeChange(kind)}
						>
							<input
								type="radio"
								value={kind}
								{...register("photokind")}
								className={styles.hiddenRadio}
							/>
							{kind}
						</label>
					))}
				</div>
				<div className={styles.submitButtonContainer}>
					<button type="submit" className={styles.submitButton}>
						Find My Camera
					</button>
				</div>
			</form>
		</div>
	);
};

export default RecommendationTest;
