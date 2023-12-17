import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../AuthContext";
import { Button } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";

const Header = () => {
	const { isAuthenticated, setAuthStatus } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const returnURL = location.pathname;

	const handleLogout = async () => {
		try {
			await signOut();
			setAuthStatus(false);
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
						<h1 className={styles.logo_txt}>
							All about Camera:
							<br />
							For Beginners
						</h1>
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
					{isAuthenticated && (
						<div className={styles.navli}>
							<Link to="mypage" className={styles.navli}>
								My Page
							</Link>
						</div>
					)}
					<div className={styles.ButtonContainer}>
						{isAuthenticated ? (
							<Button
								onClick={handleLogout}
								className={styles.Button}
							>
								Logout
							</Button>
						) : (
							<Button
								onClick={handleLogin}
								className={styles.Button}
							>
								Login
							</Button>
						)}
					</div>
				</div>
			</header>
			<div className={styles.ww}></div>
		</div>
	);
};

export default Header;
