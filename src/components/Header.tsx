import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	const logo_txt = "All about Camera:\nFor Beginners";

	return (
		<header className={styles.header}>
			<div className={styles.contents}>
				<Link to="/" className={styles.logo}>
					<h1 className={styles.logo_txt}>{logo_txt}</h1>
				</Link>
				<nav className={styles.navigation}>
					<ul className={styles.navul}>
						<Link to="/camera" className={styles.navli}>
							Camera
						</Link>
						<Link to="recommend" className={styles.navli}>
							Recommendation Service
						</Link>
						<Link to="photography" className={styles.navli}>
							Photography
						</Link>
						<Link to="gallery" className={styles.navli}>
							Photo Gallery
						</Link>
					</ul>
				</nav>
				<div className={styles.signInBtn}>Sign in</div>
			</div>
		</header>
	);
};

export default Header;
