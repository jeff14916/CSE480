import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./header/Header";
import Home from "./routes/Home";
import Camera from "./routes/Camera";
import RecommendationService from "./routes/RecommendationService";
import RecommendationTest from "./routes/RecommendationTest";
import Photography from "./routes/Photography";
import PhotoGallery from "./routes/PhotoGallery";
import LoginPage from "./routes/LoginPage";
import MyPage from "./routes/MyPage";
import NotFoundPage from "./routes/NotFoundPage";
import Result from "./routes/Result";

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
							path="/recommend/result"
							element={<Result />}
						></Route>
						<Route
							path="/photography"
							element={<Photography />}
						></Route>
						<Route
							path="/gallery"
							element={<PhotoGallery />}
						></Route>
						<Route path="/mypage" element={<MyPage />}></Route>
						<Route path="/login" element={<LoginPage />}></Route>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
