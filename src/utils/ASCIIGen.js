export function ASCIIGen(url, parent, canvas, asciiOutput) {
    const density =
        "$@b%8&wm#*oahkbdpqwmzo0qlcjuyxzcvunxrjft/\|()1{}[]?-_+~<>i!;:,^`'. ";
    const ctx = canvas.getContext("2d");

    if (/\.(jpeg|jpg|gif|png|webp)$/i.test(url)) {
        handleimage(url);
    } else if (/\.(mp4|webm|ogg|mov)$/i.test(url)) {
        console.log("video handling not implemented yet.");
    } else {
        console.log("file format not supported.");
    }

    function handleimage(url) {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = url;
        image.onload = () => {
            const aspectRatio = image.width / image.height;

            /* I have no idea why the width here is to be divided by 8 but
            its a good ratio of target width to font height. */

            let maxwidth = parent.offsetWidth / 8;
            let maxheight = Math.round(maxwidth / aspectRatio);

            const charHeightRatio = 2;
            maxheight = Math.round(maxheight / charHeightRatio);

            canvas.width = maxwidth;
            canvas.height = maxheight;

            ctx.drawImage(image, 0, 0, maxwidth, maxheight);
            generateASCII();
        };
    }
    function generateASCII() {
        const width = canvas.width;
        const height = canvas.height;
        const imagedata = ctx.getImageData(0, 0, width, height);
        console.log(imagedata)
        let ascii = "";

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const offset = (y * width + x) * 4;
                const r = imagedata.data[offset];
                const g = imagedata.data[offset + 1];
                const b = imagedata.data[offset + 2];
                const avg = (r + g + b) / 3;
                const charindex = Math.floor((avg / 255) * (density.length - 1));
                ascii += density[charindex];
            }
            ascii += "\n";
        }

        asciiOutput.textContent = ascii;
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
}
