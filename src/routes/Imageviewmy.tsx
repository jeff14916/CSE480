import React from "react";
import styles from "./Imageviewmy.module.css";
import { Gallery } from "../API";
type Gallery2 = {
	gall: Gallery;
	modurl: string;
};
interface ImageModalProps {
	image: Gallery2;
	onClose: () => void;
	onUpdate: () => void;
	onDelete: () => void;
}

const ImageViewmy = ({
	image,
	onClose,
	onUpdate,
	onDelete,
}: ImageModalProps) => {
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
					<button className={styles.closeButton} onClick={onUpdate}>
						Update
					</button>
					<button className={styles.closeButton} onClick={onDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageViewmy;
