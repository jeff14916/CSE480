import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header";
import Home from "./routes/Home";
import Camera from "./routes/Camera";
import RecommendationService from "./routes/RecommendationService";
import Photography from "./routes/Photography";
import PhotoGallery from "./routes/PhotoGallery";

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/camera" element={<Camera />}></Route>
					<Route
						path="/recommand"
						element={<RecommendationService />}
					></Route>
					<Route
						path="/photography"
						element={<Photography />}
					></Route>
					<Route path="/gallery" element={<PhotoGallery />}></Route>
					<Route path="*"></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
