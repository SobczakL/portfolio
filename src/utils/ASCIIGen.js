export function asciiGen(url, canvasRef, targetRef, config) {
	const density =
		"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!;:,^`'. ";
	let maxWidth, maxHeight;

	if (!url) {
		return Error("Invalid image source");
	} else if (isImage(url)) {
		handleImage(url, maxWidth, maxHeight);
	} else if (isVideo(url)) {
		/* handleVideo(url); */
	}

	function isImage(url) {
		return url.match(/\.(jpeg|jpg|gif|png|webp)$/i);
	}
	function isVideo(url) {
		return url.match(/\.(mp4|webm|ogg|mov)$/i);
	}

	if (config) {
		maxHeight = config.height || 500;
		maxWidth = config.width || 300;
	} else {
		maxHeight = 500;
		maxWidth = 300;
	}
	const ctx = canvasRef.getContext("2d");

    function handleImage(url, maxWidth, maxHeight) {
        const image = new Image();
		image.crossOrigin = "Anonymous";
		image.src = url;
		image.onload = () => {
			const [width, height] = _sizeReducer(
				image.width,
				image.height,
				maxWidth,
				maxHeight,
			);
			canvasRef.width = width;
			canvasRef.height = height;
			ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
			ctx.drawImage(image, 0, 0, width, height);
			generateASCII();
		};
	}
    /* Resize image to fit within maxWidth and maxHeight */
	function _sizeReducer(width, height, maxWidth, maxHeight) {
		if (width > maxWidth) {
			height = Math.floor((height * maxWidth) / width);
			width = maxWidth;
		}
		if (height > maxHeight) {
			width = Math.floor((width * maxHeight) / height);
			height = maxHeight;
		}
		return [width, height];
	}

	/* Generate ascii: calc avg brightness of pixel and map to density var to pixel position */

	function generateASCII() {
		const width = canvasRef.width;
		const height = canvasRef.height;
		const imageData = ctx.getImageData(0, 0, width, height);
		let ascii = "";

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const offset = (y * width + x) * 4;
				const r = imageData.data[offset];
				const g = imageData.data[offset + 1];
				const b = imageData.data[offset + 2];
				const avg = (r + g + b) / 3;
				const charIndex = Math.floor(
					(avg / 255) * (density.length - 1),
				);
				ascii += density[charIndex];
			}
			ascii += "\n";
		}

		targetRef.textContent = ascii;
	}
}

/* async function handleVideo(videoUrl) { */
/* 	const video = document.createElement("video"); */
/* 	video.src = videoUrl; */
/* 	video.muted = true; */
/* 	video.crossOrigin = "Anonymous"; */
/* 	video.currentTime = 0; */
/**/
/* 	video.onerror = () => { */
/* 		console.error( */
/* 			"Failed to load video. Please check the URL and format.", */
/* 		); */
/* 	}; */
/**/
/* 	// Wait until video metadata (like dimensions) is loaded */
/* 	video.addEventListener("loadedmetadata", () => { */
/* 		const width = video.videoWidth; */
/* 		const height = video.videoHeight; */
/**/
/* 		if (width === 0 || height === 0) { */
/* 			console.error("Video has zero width or height"); */
/* 			return; */
/* 		} */
/**/
/* 		canvasId.width = parentSize.width; */
/* 		canvasId.height = parentSize.height; */
/* 	}); */
/**/
/* 	// Play the video after metadata is loaded */
/* 	await video.play(); */
/**/
/* 	// Update the canvas when the video plays */
/* 	video.addEventListener("timeupdate", () => { */
/* 		const width = video.videoWidth; */
/* 		const height = video.videoHeight; */
/**/
/* 		if (width === 0 || height === 0) { */
/* 			console.error("Video has zero width or height"); */
/* 			return; */
/* 		} */
/**/
/* 		const difW = parentSize.width / width; */
/* 		const difH = parentSize.height / height; */
/**/
/* 		canvasId.width = parentSize.width; */
/* 		canvasId.height = parentSize.height; */
/**/
/* 		ctx.drawImage(video, 0, 0, width / difW, height / difH); */
/* 		generateASCII(); */
/* 	}); */
/* } */
