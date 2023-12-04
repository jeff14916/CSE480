import React, { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import {
	createGallery,
	updateGallery,
	deleteGallery,
} from "../graphql/mutations";
import { listGallerys, getGallery } from "../graphql/queries";
import { signOut } from "@aws-amplify/auth";
import {
	Text,
	View,
	Heading,
	Flex,
	TextField,
	Button,
} from "@aws-amplify/ui-react";

const client = generateClient();

const PhotoGallery = () => {
	useEffect(() => {}, []);
	const makeGallery = async () => {
		try {
			await client.graphql({
				query: createGallery,
				variables: {
					input: {
						id: "IDsss",
						nickname: "Lorem ipsum dolor sit amet",
						imageurl: "Lorem ipsum dolor sit amet",
						title: "Lorem ipsum dolor sit amet",
						description: "Lorem ipsum dolor sit amet",
					},
				},
			});
		} catch (e) {
			alert(e);
		}
	};

	return <button onClick={makeGallery}>FUCK</button>;
};

export default PhotoGallery;
