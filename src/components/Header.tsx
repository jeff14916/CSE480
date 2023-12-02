import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../AuthContext";
import { Button } from "@aws-amplify/ui-react";
import { signOut, fetchUserAttributes } from "aws-amplify/auth";

const Header = () => {
	const logo_txt = "All about Camera:\nFor Beginners";

	const { isAuthenticated, setAuthStatus } = useAuth();
	const [nickname, setNickname] = useState<string | undefined>("");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const getNickname = async () => {
			try {
				const Attributes = await fetchUserAttributes();
				setNickname(Attributes.nickname);
			} catch (e) {
				setNickname(undefined);
			}
		};
		if (isAuthenticated) {
			getNickname();
		}
	}, [isAuthenticated]);

	// Construct the returnURL
	const returnURL = location.pathname;

	const handleLogout = async () => {
		try {
			await signOut();
			setAuthStatus(false);
			alert("Logout Success!");
			window.location.reload();
		} catch (error) {
			console.error("Error during logout", error);
		}
	};
	const handleLogin = () => {
		navigate(`/login?returnURL=${returnURL}`);
	};

	return (
		<div>
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
					<div className={styles.navli}>
						{nickname && `Hello, ${nickname}!`}
					</div>
					{isAuthenticated ? (
						<Button
							onClick={handleLogout}
							className={styles.signInBtn}
						>
							Logout
						</Button>
					) : (
						<Button
							onClick={handleLogin}
							className={styles.signInBtn}
						>
							Login
						</Button>
					)}
				</div>
			</header>
			<div className={styles.ww}></div>
		</div>
	);
};

export default Header;
