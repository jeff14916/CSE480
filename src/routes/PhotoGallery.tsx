// @auth(
// 	rules: [
// 		{ allow: owner, operations: [create, update, read, delete] }
// 		{ allow: public, operations: [read] }
// 	]
// )
import React, { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import {
	createGallery,
	updateGallery,
	deleteGallery,
} from "../graphql/mutations";
import { listGalleries, getGallery } from "../graphql/queries";
import { fetchUserAttributes } from "aws-amplify/auth";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const client = generateClient();

const PhotoGallery = () => {
	const navigate = useNavigate();
	const [nicknam, setnicknam] = useState("");
	const { isAuthenticated, setAuthStatus } = useAuth();
	useEffect(() => {
		const setuser = async () => {
			if (!isAuthenticated) {
				alert("Not logged In!");
				navigate(`/login?returnURL=/gallery`);
			} else {
				try {
					const attr = await fetchUserAttributes();
					setnicknam(attr.nickname ? attr.nickname : "Undefined");
				} catch (e) {}
			}
		};
		setuser();
	}, [isAuthenticated, navigate]);
	const makeGallery = async () => {
		try {
			const response = await client.graphql({
				query: createGallery,
				variables: {
					input: {
						nickname: nicknam,
						imageurl: "Lorem ipsum dolor sit amet",
						title: "Lorem ipsum dolor sit amet",
						description: "Lorem ipsum dolor sit amet",
						timestamp: "dddddddd",
					},
				},
			});
			console.log("Gallery created:", response.data.createGallery);
		} catch (e) {
			console.error("Error creating gallery:", e);
		}
	};

	return <button onClick={makeGallery}>FUCK</button>;
};

export default PhotoGallery;
