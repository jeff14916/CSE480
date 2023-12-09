import React from "react";
import styles from "./Photography.module.css";

const Photography = () => {
	document.title = "Photography";
	return (
		<div className={styles.content}>
			<div>
				<div className={styles.hrintro}>
					<h2>
						Taking photos can feel overwhelming with so much to
						consider, right? For now, let's focus on capturing
						images based on the elements we're going to share with
						you!
					</h2>
				</div>

				<br></br>
				<div className={styles.hrTitle}>
					<div className={styles.hrLine}></div>
					<h3>GUIDE TO LEARNING PHOTOGRAPHY: Lighting</h3>
					<div className={styles.hrLine}></div>
				</div>
				<div>
					<div className={styles.imgcontainer}>
						<img
							className={styles.cameraImg}
							src="https://markbrion.com/wp-content/uploads/light-and-mist-1.jpg"
							alt="img"
						></img>
					</div>

					<p>
						When it comes to photography, the type of lighting that
						you use is the most important element in the composition
						of any image. Light in photography refers to how the
						light source, natural or artificial and how the position
						of light source relates to your subject. The position
						and quality of light can affect any number of things in
						your final image, from clarity to tone to emotion and so
						much more. By paying attention to how light plays off
						the angles and curves of your subject and which parts of
						the subject are illuminated and which are in darkness,
						you will become a stronger photographer because you’ll
						start to learn how to harness your light source in the
						most effective way for any given composition and
						project. Whether you’re shooting portrait or landscape
						photography, so much of your lighting choices will
						depend on the features of the subject and how you want
						them to be portrayed in your photos. For example, hard
						light is more severe and will emphasize angles and any
						surface that are not perfectly flat, like the waves at a
						beach, whilst soft light will always smooth over these
						features. Understanding how to make the best use of
						natural and artificial lighting in every situation will
						be a huge step forward in your journey to improving and
						producing the best possible images.
					</p>
				</div>
				<div>
					<div className={styles.hrTitle}>
						<div className={styles.hrLine}></div>
						<h3>GUIDE TO LEARNING PHOTOGRAPHY: Proportion</h3>
						<div className={styles.hrLine}></div>
					</div>
					<div>
						<div className={styles.imgcontainer}>
							<img
								className={styles.cameraImg}
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynSFUM2yAr2e_T6DyliIVSaO_WDjZpQ8nxgINvBj3pQ&s"
								alt="img"
							></img>
						</div>
						<p>
							**Choose Aspect Ratio Depending on Your Audience**
							You can choose the proportions depending on the
							proportions of your subject. In the case of cars,
							the horizontal ratio is longer, so when using a 1:1
							ratio, more space is left on the top and bottom.
							Conversely, buildings have a longer vertical ratio,
							so when using a 1:1 ratio, more horizontal space is
							left.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Photography;
