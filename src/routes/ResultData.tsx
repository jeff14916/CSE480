const Resultdata = (param: string | null) => {
	let imgsrc = "";
	let cameraname = "";
	if (!param) return ["", ""];
	switch (param) {
		case "1100":
			imgsrc =
				"https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5169853226/B.jpg?931000000";
			cameraname = "Canon EOS Rebel T7 (EOS 2000D)";
			break;
		case "1200":
			imgsrc =
				"https://www.tradeinn.com/f/13734/137344191/canon-%EC%82%AC%EC%95%85%ED%95%9C-%EC%B9%B4%EB%A9%94%EB%9D%BC-eos-m100-15-45-mm.jpg";
			cameraname = "Canon EOS M100";
			break;
		case "1300":
			imgsrc =
				"https://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/0goAAOSwPDFimlhD/$_57.JPG?set_id=880000500F";
			cameraname = "Canon AE-1";
			break;
		case "2200":
			imgsrc =
				"https://www.dpreview.com/files/p/E~products/sony_a6000/shots/068c499f89b049b5a3d26be9510f7c27.png";
			cameraname = "Sony Alpha a6000";
			break;
		case "3100":
			imgsrc =
				"https://www.nikon-image.co.kr/upload/new_prdt/NK0001380/NK0001380_Image_middle1.png";
			cameraname = "Nikon D3500";
			break;
		case "3200":
			imgsrc =
				"https://www.nikon-image.co.kr/upload/new_prdt/NK0001404/img/img_07.jpg";
			cameraname = "Nikon Z50";
			break;
		case "3300":
			imgsrc =
				"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nikon_F3_with_HP_viewfinder.jpeg/1200px-Nikon_F3_with_HP_viewfinder.jpeg";
			cameraname = "Nikon F3";
			break;
		case "0":
			imgsrc = "";
			cameraname = "";
			break;
		default:
			imgsrc = "";
			cameraname = "No Preferences (will update later)";
	}
	return [imgsrc, cameraname];
};

export default Resultdata;
