import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header";
import Home from "./routes/Home";
import Camera from "./routes/Camera";
import RecommendationService from "./routes/RecommendationService";
import RecommendationTest from "./routes/RecommendationTest";
import Photography from "./routes/Photography";
import PhotoGallery from "./routes/PhotoGallery";
import LoginPage from "./routes/LoginPage";
import SignUpPage from "./routes/SignUpPage";
import { AuthProvider } from "./AuthContext";

function App() {
	return (
		<div className={styles.App}>
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/camera" element={<Camera />}></Route>
						<Route
							path="/recommend"
							element={<RecommendationService />}
						></Route>
						<Route
							path="/recommend/test"
							element={<RecommendationTest />}
						></Route>
						<Route
							path="/photography"
							element={<Photography />}
						></Route>
						<Route
							path="/gallery"
							element={<PhotoGallery />}
						></Route>
						<Route path="/login" element={<LoginPage />}></Route>
						<Route path="/signup" element={<SignUpPage />}></Route>
						<Route path="*"></Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
