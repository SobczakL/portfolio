import { useEffect, useRef, useState } from "react";
import { asciiGen } from "../utils/ASCIIGen";
import videoMedia from "../assets/images/test.mov";
import { Box } from "@chakra-ui/react";

export default function AsciiArt() {
	const canvasRef = useRef(null);
	const asciiArtRef = useRef(null);
	const [fontSize, setFontSize] = useState(14);

	const calculateFontSize = () => {
		const windowWidth = window.innerWidth;

        if(windowWidth < 767){
            setFontSize(4)
        } else if(windowWidth >= 768 && windowWidth < 1280){
            setFontSize(6)
        } else {
            setFontSize(8)
        }
	};

	useEffect(() => {
		calculateFontSize();

		window.addEventListener("resize", calculateFontSize);

		const mediaURL = videoMedia;
		asciiGen(mediaURL, canvasRef.current, asciiArtRef.current);

		return () => {
			window.removeEventListener("resize", calculateFontSize);
		};
	}, []);

	return (
		<Box maxW="100vw" maxH="fit-content" overflow="none">
			<canvas ref={canvasRef} style={{ display: "none" }}></canvas>
			<pre ref={asciiArtRef} style={{ fontSize: `${fontSize}px` }}></pre>
		</Box>
	);
}
