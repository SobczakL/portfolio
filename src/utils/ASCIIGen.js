export function asciiGen(url, parentId, elementId, asciiArtElement) {
	const parentSize = parentId.offsetWidth;
	console.log(parentSize);
	const density =
		"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,^`'. ";
	const ctx = elementId.getContext("2d");

	if (isImage(url)) {
		handleImage(url);
	} else if (isVideo(url)) {
		handleVideo(url);
	} else {
		console.error("Unsupported media type");
	}

	function isImage(url) {
		return url.match(/\.(jpeg|jpg|gif|png|webp)$/i);
	}

	function isVideo(url) {
		return url.match(/\.(mp4|webm|ogg|mov)$/i);
	}

	function handleImage(imageUrl) {
		const img = new Image();
		img.src = imageUrl;
		img.crossOrigin = "Anonymous";
		img.onload = () => {
			const aspectRatio = img.width / img.height;
			const width = targetWidth;
			const height = targetHeight;

			elementId.width = width;
			elementId.height = height;
			ctx.drawImage(img, 0, 0, width, height);
			generateASCII();
		};
	}

	async function handleVideo(videoUrl) {
		const video = document.createElement("video");

		video.src = videoUrl;
		video.muted = true;
		video.crossOrigin = "Anonymous";
		video.currentTime = 0;
		video.onerror = () => {
			console.error(
				"Failed to load video. Please check the URL and format.",
			);
		};
		await video.play();

		video.addEventListener("timeupdate", () => {
			const aspectRatio = video.videoWidth / video.videoHeight;
			const width = targetWidth;
			const height = Math.round(width / aspectRatio);

			elementId.width = parentSize;
			elementId.height = height;
			ctx.drawImage(video, 0, 0, width, height);
			generateASCII();
		});
	}

	/* Generate ascii: calc avg brightness of pixel and map to density var to pixel position */
	function generateASCII() {
		const width = elementId.width;
		const height = elementId.height;
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

		asciiArtElement.textContent = ascii;
	}
}
