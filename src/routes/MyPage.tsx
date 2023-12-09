import React, { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import { galleryByOwner } from "../graphql/queries";
import {
	fetchUserAttributes,
	getCurrentUser,
	updateUserAttribute,
} from "aws-amplify/auth";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { GalleryUpdateForm, NewForm1 } from "../ui-components";
import { getUrl, GetUrlInput } from "@aws-amplify/storage";
import { Gallery, ModelSortDirection } from "../API";
import { deleteGallery } from "../graphql/mutations";
import styles from "./MyPage.module.css";
import ResultData from "./ResultData";
import ImageViewmy from "./Imageviewmy";

const client = generateClient();
let IMAGES_PER_PAGE = 6;
type Gallery2 = {
	gall: Gallery;
	modurl: string;
};

const MyPage = () => {
	document.title = "My Page";
	const [showupdateForm, setupdateForm] = useState(false);
	const [shownickForm, setnickForm] = useState(false);
	const navigate = useNavigate();
	const [userSet, setuserSet] = useState(false);
	const [nicknam, setnicknam] = useState("");
	const [cogid, setcogid] = useState("");
	const [imgsrc, setimgsrc] = useState("");
	const [cameraname, setcameraname] = useState("");
	const { isAuthenticated } = useAuth();
	const [currentpage, setcurrentpage] = useState(0);
	const [response, setresponse] = useState<Gallery2[] | undefined>(undefined);
	const [len, setlen] = useState(0);
	const closeView = () => setSelectedImage(undefined);
	const [paginatedImages1, setpaginatedImages1] = useState<
		Gallery2[] | undefined
	>(undefined);
	const [paginatedImages2, setpaginatedImages2] = useState<
		Gallery2[] | undefined
	>(undefined);
	const [selectedImage, setSelectedImage] = useState<Gallery2 | undefined>(
		undefined
	);
	const [triggerFetch, setTriggerFetch] = useState(0);
	const [fetchComplete, setfetchComplete] = useState(0);
	useEffect(() => {
		const fetchGallery = async () => {
			if (userSet) {
				try {
					const resp = await client.graphql({
						query: galleryByOwner,
						variables: {
							owner: cogid,
							sortDirection: ModelSortDirection.DESC,
						},
					});
					let realGal: Gallery2[] = [];
					if (resp) {
						for (
							let i = 0;
							i < resp.data.galleryByOwner.items.length;
							i++
						) {
							let newItem: Gallery2 = {
								gall: resp.data.galleryByOwner.items[i],
								modurl: await getURL(
									resp.data.galleryByOwner.items[i].imageurl
								),
							};
							realGal.push(newItem);
						}
					}
					setresponse(realGal);
					setlen(resp.data.galleryByOwner.items.length);
					setfetchComplete((f) => f + 1);
				} catch (e) {
					console.error("Error loading gallery:", e);
				}
			}
		};
		fetchGallery();
	}, [cogid, isAuthenticated, triggerFetch, userSet]);
	useEffect(() => {
		if (fetchComplete) {
			setpaginatedImages1(
				response
					? response.slice(
							currentpage * IMAGES_PER_PAGE,
							currentpage * IMAGES_PER_PAGE + IMAGES_PER_PAGE / 2
					  )
					: undefined
			);
			setpaginatedImages2(
				response
					? response.slice(
							currentpage * IMAGES_PER_PAGE + IMAGES_PER_PAGE / 2,
							currentpage * IMAGES_PER_PAGE + IMAGES_PER_PAGE
					  )
					: undefined
			);
		}
	}, [response, currentpage, fetchComplete]);

	useEffect(() => {
		if (!isAuthenticated) {
			alert("Not logged In!");
			navigate(`/login?returnURL=/mypage`);
		}
		const setuser = async () => {
			if (isAuthenticated) {
				try {
					const attr = await fetchUserAttributes();
					setnicknam(attr.nickname ? attr.nickname : "");
					const customresult = attr["custom:result"];
					let a,
						b = "";
					[a, b] = ResultData(customresult ? customresult : "");
					setimgsrc(a);
					setcameraname(b);
					const user = await getCurrentUser();
					setcogid(user.userId);
					setuserSet(true);
				} catch (e) {}
			}
		};
		setuser();
	}, [isAuthenticated, navigate]);

	const galleryUpdate = () => {
		setupdateForm(true);
		setTriggerFetch(triggerFetch + 1);
	};
	const galleryDelete = async () => {
		const response = window.confirm("Are you Sure to delete this photo?");
		if (response) {
			try {
				await client.graphql({
					query: deleteGallery,
					variables: {
						input: {
							id: selectedImage?.gall.id
								? selectedImage?.gall.id
								: "",
						},
					},
				});
				setTriggerFetch(triggerFetch + 1);
			} catch (e) {
				alert("Delete Failed!");
			}
			closeView();
		}
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
	const selectImage = (image: Gallery2) => {
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
	const nickChange = () => {
		setnickForm(true);
	};
	const UpdateAttributes = async (param: string) => {
		try {
			await updateUserAttribute({
				userAttribute: {
					attributeKey: "nickname",
					value: param,
				},
			});
			setnicknam(param);
		} catch (e) {}
	};

	return (
		<div>
			<div className={styles.hrintro}>
				<h2>Hello, {nicknam}!</h2>
				<h3 className={styles.tag}> Change nickname </h3>
			</div>
			<div className={styles.ButtonContainer}>
				<button onClick={nickChange} className={styles.Button}>
					Change nickname
				</button>
			</div>
			<div className={styles.hrintro}>
				<h3 className={styles.tag}> Previous Recommend Result: </h3>
			</div>
			<div className={styles.diagram}>
				<img src={imgsrc} alt="Camera Diagram" />
			</div>
			<h3 className={styles.footer}>{cameraname}</h3>
			{shownickForm && (
				<div className={styles.formmodel}>
					<NewForm1
						onSubmit={(fields) => {
							setnickForm(false);
							const newnick = fields.Field0;
							if (newnick) {
								UpdateAttributes(newnick);
							}
						}}
						onCancel={() => {
							setnickForm(false);
						}}
					/>
				</div>
			)}
			{showupdateForm && (
				<div className={styles.formmodel}>
					<GalleryUpdateForm
						gallery={selectedImage?.gall}
						onCancel={() => {
							setupdateForm(false);
						}}
						onSuccess={() => {
							setTriggerFetch(triggerFetch + 1);
							setupdateForm(false);
							closeView();
						}}
					/>
				</div>
			)}
			<div className={styles.hrintro}>
				<h3 className={styles.tag}> Your Photos </h3>
			</div>
			<div className={styles.photosContainer}>
				{paginatedImages1 &&
					paginatedImages1.map((image, index) => (
						<div key={index} onClick={() => selectImage(image)}>
							<img
								src={image.modurl}
								alt="Load Failed"
								style={{
									width: "300px",
									height: "auto",
									margin: "10px",
								}}
							/>
						</div>
					))}
			</div>
			<div className={styles.photosContainer}>
				{paginatedImages2 &&
					paginatedImages2.map((image, index) => (
						<div key={index} onClick={() => selectImage(image)}>
							<img
								src={image.modurl}
								alt="Load Failed"
								style={{
									width: "300px",
									height: "auto",
									margin: "10px",
								}}
							/>
						</div>
					))}
			</div>
			{selectedImage && (
				<ImageViewmy
					image={selectedImage}
					onClose={closeView}
					onUpdate={() => galleryUpdate()}
					onDelete={() => galleryDelete()}
				/>
			)}
			<div className={styles.ButtonContainer}>
				<button
					onClick={previousPage}
					className={styles.Button}
					disabled={currentpage === 0}
				>
					Previous
				</button>
				<button
					onClick={nextPage}
					className={styles.Button}
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

export default MyPage;
