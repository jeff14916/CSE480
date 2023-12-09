import React from "react";
import styles from "./Imageview.module.css";
import { Gallery } from "../API";
type Gallery2 = {
	gall: Gallery;
	modurl: string;
};
interface ImageModalProps {
	image: Gallery2;
	onClose: () => void;
}

const ImageView = ({ image, onClose }: ImageModalProps) => {
	if (!image) return null;

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div
				className={styles.modalContent}
				onClick={(e) => e.stopPropagation()}
			>
				<img
					src={image.modurl}
					alt="Selected"
					className={styles.modalImage}
				/>
				<p>
					<strong>Title:</strong> {image.gall.title}
				</p>
				<p>
					<strong>Description:</strong> {image.gall.description}
				</p>
				<div className={styles.buttonContainer}>
					<button className={styles.closeButton} onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageView;
