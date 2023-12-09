import React from "react";
import styles from "./Camera.module.css";

const Camera = () => {
	document.title = "Camera";
	const dslrPara =
		"A DSLR camera, short for Digital Single-Lens Reflex camera, is highly recommended for camera beginners due to its diverse features and advantages that greatly assist in photography.\n\nThe structure of a DSLR camera involves reflecting the incoming light through a lens to capture a photograph. Additionally, it uses a digital sensor to collect light and store it as a digital image. These stored images can later be edited or printed using a computer or printer.\nOne of the key features of a DSLR camera is the ability to interchange lenses, allowing users to select lenses that are suitable for various shooting situations. Furthermore, it provides a wide range of manual adjustment options, enabling users to directly control exposure, focus, white balance, and more, to achieve desired image effects. Moreover, DSLR cameras are equipped with high-resolution image sensors, ensuring sharp and detailed photographs.\nDSLR cameras are particularly well-suited for various genres of photography, including landscapes, portraits, and sports. They also excel in environments with limited lighting, enabling users to capture photos in low-light conditions or with fast-moving subjects.\n\nIn summary, DSLR cameras offer a multitude of features and adjustment options that greatly aid in photography. The ability to interchange lenses allows for versatility in different shooting situations, and the inclusion of high-resolution image sensors ensures sharp and detailed images. DSLR cameras are particularly suitable for a wide range of genres and perform exceptionally well in challenging lighting conditions and capturing fast-paced action.";
	const mirrorlessPara =
		"A mirrorless camera is a popular choice among photography beginners. It performs a similar role to DSLR cameras but comes with a more compact and lightweight design.\nUnlike DSLRs, mirrorless cameras don't have a mirror inside. Instead, they directly capture the incoming light onto the image sensor to take photos. This design allows for a smaller and more portable camera body.\n\nMirrorless cameras offer various features. Most of them come with an electronic viewfinder that allows you to preview the photo in real-time. This feature lets you check the exposure, colors, and other settings before capturing the shot. Additionally, mirrorless cameras often include autofocus and face detection features, making it easier to take photos.\nMirrorless cameras are versatile and can be used for various types of photography. They are well-suited for capturing landscapes, portraits, cityscapes, and food, among other subjects. Despite their smaller size, mirrorless cameras are equipped with high-resolution image sensors that produce sharp and detailed images.\n\nIn summary, a mirrorless camera is a compact and lightweight alternative to DSLRs. It offers features such as an electronic viewfinder for real-time preview and autofocus capabilities. It is suitable for a wide range of photography genres and delivers high-quality results with its high-resolution image sensors.";
	const filmPara =
		"Film cameras can be an intriguing choice for beginners in photography. These cameras possess a unique charm that sets them apart from digital cameras.\n\nA film camera captures photos using a sensitive medium called film. Unlike digital cameras, where images are recorded directly onto a sensor, film cameras require the film to be developed after taking the photos.\nFilm cameras offer various features, but they are designed with simple operation in mind, making them user-friendly. Most film cameras allow manual control of focus, exposure, and shutter speed. These manual control capabilities enable photographers to capture creative shots.\nFilm cameras have a distinct appeal and can be used for a wide range of photography. Black and white film can produce classic and nostalgic photos, while color film can capture vivid and diverse images. Film cameras excel in capturing textures and rendering colors in a soft and pleasing manner, making them suitable for various subjects such as landscapes, portraits, and everyday scenes.\n\nIn summary, film cameras present an intriguing choice for beginners in photography. By utilizing film as the medium, these cameras offer manual control capabilities for creative photography. Whether using black and white or color film, film cameras can produce classic, nostalgic, and vibrant images, particularly excelling in capturing textures and rendering colors in a pleasing manner across various subjects.";

	return (
		<div className={styles.content}>
			<div>
				<div className={styles.hrintro}>
					<h2>
						There are three major types of Cameras: DSLR,
						Mirrorless, and Film camera.
					</h2>
				</div>
				<div className={styles.hrTitle}>
					<div className={styles.hrLine}></div>
					<h3>DSLR Camera</h3>
					<div className={styles.hrLine}></div>
				</div>
				<div className={styles.imgcontainer}>
					<img
						className={styles.cameraImg}
						src="https://global.canon/en/technology/structure/dslr/img/02.jpg"
						alt="img"
					/>
					<p className={styles.para}>{dslrPara}</p>
				</div>
			</div>
			<div>
				<div className={styles.hrTitle}>
					<div className={styles.hrLine}></div>
					<h3>Mirrorless Camera</h3>
					<div className={styles.hrLine}></div>
				</div>
				<div className={styles.imgcontainer}>
					<img
						className={styles.cameraImg}
						src="https://global.canon/en/technology/structure/mcamera/img/image01.jpg"
						alt="img"
					/>
					<p className={styles.para}>{mirrorlessPara}</p>
				</div>
			</div>
			<div>
				<div className={styles.hrTitle}>
					<div className={styles.hrLine}></div>
					<h3>Film Camera</h3>
					<div className={styles.hrLine}></div>
				</div>
				<div className={styles.imgcontainer}>
					<img
						className={styles.cameraImg}
						src="https://www.filmcameraexpert.com/wp-content/uploads/2020/11/learn-film-camera-parts.jpg"
						alt="img"
					/>
					<p className={styles.para}>{filmPara}</p>
				</div>
			</div>
		</div>
	);
};

export default Camera;
