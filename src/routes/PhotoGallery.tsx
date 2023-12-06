import React, { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import { galleryByDate } from "../graphql/queries";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { GalleryCreateForm } from "../ui-components";
import styles from "./PhotoGallery.module.css";
import { getUrl, GetUrlInput } from "@aws-amplify/storage";
import { Gallery, ModelSortDirection } from "../API";

const client = generateClient();
let IMAGES_PER_PAGE = 6;

const PhotoGallery = () => {
	const [showcreateForm, setcreateForm] = useState(false);
	const navigate = useNavigate();
	const [nicknam, setnicknam] = useState("");
	const [cogid, setcogid] = useState("");
	const { isAuthenticated } = useAuth();
	const [currentpage, setcurrentpage] = useState(0);
	const [response, setresponse] = useState<Gallery[] | undefined>(undefined);
	const [len, setlen] = useState(0);
	const [paginatedImages, setpaginatedImages] = useState<
		Gallery[] | undefined
	>(undefined);
	const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);
	const [triggerFetch, setTriggerFetch] = useState(0);
	const [fetchComplete, setfetchComplete] = useState(0);
	useEffect(() => {
		const fetchGallery = async () => {
			if (isAuthenticated) {
				try {
					const resp = await client.graphql({
						query: galleryByDate,
						variables: {
							dummy: "CONST",
							sortDirection: ModelSortDirection.DESC,
						},
					});
					try {
						if (resp) {
							for (
								let i = 0;
								i < resp.data.galleryByDate.items.length;
								i++
							) {
								resp.data.galleryByDate.items[i].imageurl =
									await getURL(
										resp.data.galleryByDate.items[i]
											.imageurl
									);
							}
						}
					} catch (e) {
						console.error("Error loading gallery:", e);
					}
					setresponse(resp.data.galleryByDate.items);
					setlen(resp.data.galleryByDate.items.length);
					setfetchComplete((f) => f + 1);
				} catch (e) {}
			}
		};
		fetchGallery();
	}, [isAuthenticated, triggerFetch]);
	useEffect(() => {
		if (fetchComplete) {
			setpaginatedImages(
				response
					? response.slice(
							currentpage * IMAGES_PER_PAGE,
							currentpage * IMAGES_PER_PAGE + IMAGES_PER_PAGE
					  )
					: undefined
			);
		}
	}, [response, currentpage, fetchComplete]);
	useEffect(() => {
		if (!isAuthenticated) {
			alert("Not logged In!");
			navigate(`/login?returnURL=/gallery`);
		}
		const setuser = async () => {
			if (isAuthenticated) {
				try {
					const attr = await fetchUserAttributes();
					setnicknam(attr.nickname ? attr.nickname : "Undefined");
					const user = await getCurrentUser();
					setcogid(user.userId);
				} catch (e) {}
			}
		};
		setuser();
	}, [isAuthenticated, navigate]);

	const galleryCreate = () => {
		setcreateForm(true);
	};

	const nextPage = () => {
		if (response) {
			if (currentpage * IMAGES_PER_PAGE + IMAGES_PER_PAGE < len) {
				setcurrentpage(currentpage + 1);
			}
		}
	};
	const previousPage = () => {
		if (currentpage > 0) {
			setcurrentpage(currentpage - 1);
		}
	};
	const selectImage = (image: Gallery) => {
		setSelectedImage(image);
	};
	const getURL = async (url: any) => {
		if (!url) return "";
		const urlinput: GetUrlInput = {
			key: url,
		};
		const repurl = (await getUrl(urlinput)).url.href;
		return repurl;
	};

	return (
		<div>
			<button onClick={galleryCreate}>create</button>
			{showcreateForm && (
				<div className={styles.formmodel}>
					<GalleryCreateForm
						onSubmit={(fields) => {
							setcreateForm(false);
							const currentTimestamp = new Date().toISOString();
							const currentnickname = nicknam;
							const updatedFields = {
								...fields,
								timestamp: currentTimestamp,
								nickname: currentnickname,
								dummy: "CONST",
								owner: cogid,
							};
							return updatedFields;
						}}
						onCancel={() => {
							setcreateForm(false);
						}}
						onSuccess={() => {
							setTriggerFetch(triggerFetch + 1);
						}}
					></GalleryCreateForm>
				</div>
			)}
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{paginatedImages &&
					paginatedImages.map((image, index) => (
						<div key={index} onClick={() => selectImage(image)}>
							<img
								src={image.imageurl}
								alt={image.title}
								style={{
									width: "150px",
									height: "150px",
									margin: "10px",
								}}
							/>
						</div>
					))}
			</div>
			{selectedImage && (
				<img
					src={selectedImage.imageurl}
					alt={selectedImage.title}
					style={{
						width: "400px",
						height: "400px",
						margin: "40px",
					}}
				/>
			)}
			<div>
				<button onClick={previousPage} disabled={currentpage === 0}>
					Previous
				</button>
				<button
					onClick={nextPage}
					disabled={
						!response ||
						currentpage * IMAGES_PER_PAGE + IMAGES_PER_PAGE >= len
					}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PhotoGallery;
