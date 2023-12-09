const Resultdata = (param: string | null) => {
	let imgsrc = "";
	let cameraname = "";
	if (!param) return ["", ""];
	const num = parseInt(param);
	console.log(num);
	const num1 = Math.floor(num / 1000);
	const num2 = Math.floor((num - num1 * 1000) / 100);
	const num3 = Math.floor((num - num1 * 1000 - num2 * 100) / 10);
	const option = Math.floor(num - num1 * 1000 - num2 * 100 - num3 * 10);
	if (num1 === 1) {
		if (num2 === 1) {
			if (num3 === 1) {
				if (option === 2) {
					imgsrc =
						"https://www.the-digital-picture.com/Images/Review/Canon-EOS-Rebel-SL3.jpg";
					cameraname =
						"Canon EOS Rebel SL3 (EOS 250D / EOS 200D Mark II)";
				} else {
					imgsrc =
						"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5169853226/B.jpg?931000000";
					cameraname = "Canon EOS Rebel T7 (EOS 2000D)";
				}
			}
			if (num3 === 2) {
				imgsrc =
					"https://www.dpreview.com/files/p/articles/5517326302/product/CanonEOS90D-top.jpeg";
				cameraname = "Canon EOS 90D";
			}
			if (num3 === 3) {
				imgsrc =
					"https://www.cameralabs.com/wp-content/uploads/2017/06/canon-eos-6d-ii-hero1.jpg";
				cameraname = "Canon EOS 6D Mark II";
			}
		}
		if (num2 === 2) {
			if (num3 === 1) {
				imgsrc =
					"https://www.tradeinn.com/f/13734/137344191/canon-%EC%82%AC%EC%95%85%ED%95%9C-%EC%B9%B4%EB%A9%94%EB%9D%BC-eos-m100-15-45-mm.jpg";
				cameraname = "Canon EOS M100";
			}
			if (num3 === 2) {
				imgsrc =
					"https://www.tradeinn.com/f/13815/138151346/canon-eos-m50-mark-ii-camera.jpg";
				cameraname = "Canon EOS M50 Mark II";
			}
			if (num3 === 3) {
				imgsrc =
					"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5378736683/B.jpg?349000000";
				cameraname = "Canon EOS R6";
			}
		}
		if (num2 === 3) {
			if (num3 === 1) {
				imgsrc =
					"https://img.danawa.com/prod_img/500000/460/982/img/4982460_1.jpg?_v=20200115113150";
				cameraname = "Canon AE-1";
			}
			if (num3 === 2) {
				imgsrc =
					"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Canon_EOS-1V.jpg/1200px-Canon_EOS-1V.jpg";
				cameraname = "Canon EOS-1V";
			}
			if (num3 === 3) {
				imgsrc =
					"https://assets.community.lomography.com/0e/4b85ad7c89b49b5e2f1575dac06aa6cd6628ea/622x477x2.jpg?auth=d557a51417ee50d84669c5583981b3220461f2c4";
				cameraname = "Canon T90";
			}
		}
	}
	if (num1 === 2) {
		if (num2 === 2) {
			if (num3 === 1) {
				imgsrc =
					"https://www.dpreview.com/files/p/E~products/sony_a6000/shots/068c499f89b049b5a3d26be9510f7c27.png";
				cameraname = "Sony Alpha a6000";
			}
			if (num3 === 2) {
				imgsrc =
					"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5870464453/B.jpg?233000000";
				cameraname = "Sony Alpha a6400";
			}
			if (num3 === 3) {
				if (option === 1) {
					imgsrc =
						"https://www.ephotozine.com/articles/sony-alpha-xx-xx-announced-32006/images/highres-Sony-Alpha-A7-III-2-Custom_1519667443.jpg";
					cameraname = "Sony Alpha a7 III";
				} else {
					imgsrc =
						"https://www.ephotozine.com/articles/sony-alpha-a6600-review-34422/images/highres-Sony-Alpha-A6600-4_1580290979.jpg";
					cameraname = "Sony Alpha a6600";
				}
			}
		}
	}
	if (num1 === 3) {
		if (num2 === 1) {
			if (num3 === 1) {
				imgsrc =
					"https://www.nikon-image.co.kr/upload/new_prdt/NK0001380/img/img_22.jpg";
				cameraname = "Nikon D3500";
			}
			if (num3 === 2) {
				imgsrc =
					"https://www.nikon-image.co.kr/upload/new_prdt/NK0001310/NK0001310_Image_middle1.png";
				cameraname = "Nikon D5600";
			}
			if (num3 === 3) {
				imgsrc =
					"https://www.nikon-image.co.kr/upload/new_prdt/NK0001429/img/pic_49.jpg";
				cameraname = "Nikon D780";
			}
		}
		if (num2 === 2) {
			if (num3 === 2) {
				imgsrc =
					"https://www.nikon-image.co.kr/upload/new_prdt/NK0001404/img/img_07.jpg";
				cameraname = "Nikon Z50";
			}
			if (num3 === 3) {
				imgsrc =
					"https://www.nikon-image.co.kr/upload/new_prdt/NK0001540/img/features04/pic_10.jpg";
				cameraname = "Nikon Z6 II";
			}
		}
		if (num2 === 3) {
			if (num3 === 1) {
				imgsrc =
					"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nikon_F3_with_HP_viewfinder.jpeg/1200px-Nikon_F3_with_HP_viewfinder.jpeg";
				cameraname = "Nikon F3";
			}
			if (num3 === 2) {
				imgsrc =
					"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/NikonFM3A.jpg/1200px-NikonFM3A.jpg";
				cameraname = "Nikon FM3A";
			}
			if (num3 === 3) {
				imgsrc =
					"https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-aRYhaO9IvtTEH3BkNKBXjyzSV-Tmc2LI1QzE2CCBOrQ==/Views/1799_F6_34l.png";
				cameraname = "Nikon F6";
			}
		}
	}
	if (num1 === 4) {
		if (num2 === 1) {
			if (num3 === 1) {
				if (option === 3) {
					imgsrc =
						"https://www.nikon-image.co.kr/upload/new_prdt/NK0001380/img/img_22.jpg";
					cameraname = "Nikon D3500";
				} else {
					imgsrc =
						"https://www.the-digital-picture.com/Images/Review/Canon-EOS-Rebel-SL3.jpg";
					cameraname =
						"Canon EOS Rebel SL3 (EOS 250D / EOS 200D Mark II)";
				}
			}
			if (num3 === 2) {
				if (option === 2) {
					imgsrc =
						"https://www.nikon-image.co.kr/upload/new_prdt/NK0001310/NK0001310_Image_middle1.png";
					cameraname = "Nikon D5600";
				} else {
					imgsrc =
						"https://www.dpreview.com/files/p/articles/5517326302/product/CanonEOS90D-top.jpeg";
					cameraname = "Canon EOS 90D";
				}
			}
			if (num3 === 3) {
				imgsrc =
					"https://www.cameralabs.com/wp-content/uploads/2017/06/canon-eos-6d-ii-hero1.jpg";
				cameraname = "Canon EOS 6D Mark II";
			}
		}
		if (num2 === 2) {
			if (num3 === 1) {
				imgsrc =
					"https://www.dpreview.com/files/p/E~products/sony_a6000/shots/068c499f89b049b5a3d26be9510f7c27.png";
				cameraname = "Sony Alpha a6000";
			}
			if (num3 === 2) {
				if (option === 3) {
					imgsrc =
						"https://www.cameralabs.com/wp-content/uploads/2017/06/canon-eos-6d-ii-hero1.jpg";
					cameraname = "Canon EOS M50 Mark II";
				} else {
					imgsrc =
						"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5870464453/B.jpg?233000000";
					cameraname = "Sony Alpha a6400";
				}
			}
			if (num3 === 3) {
				imgsrc =
					"https://www.nikon-image.co.kr/upload/new_prdt/NK0001540/img/features04/pic_10.jpg";
				cameraname = "Nikon Z6 II";
			}
		}
		if (num2 === 3) {
			if (num3 === 1) {
				imgsrc =
					"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nikon_F3_with_HP_viewfinder.jpeg/1200px-Nikon_F3_with_HP_viewfinder.jpeg";
				cameraname = "Nikon F3";
			}
			if (num3 === 2) {
				imgsrc =
					"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Canon_EOS-1V.jpg/1200px-Canon_EOS-1V.jpg";
				cameraname = "Canon EOS-1V";
			}
			if (num3 === 3) {
				imgsrc =
					"https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-aRYhaO9IvtTEH3BkNKBXjyzSV-Tmc2LI1QzE2CCBOrQ==/Views/1799_F6_34l.png";
				cameraname = "Nikon F6";
			}
		}
	}
	if (cameraname === "") {
		cameraname = "ERROR";
	}
	return [imgsrc, cameraname];
};

export default Resultdata;
