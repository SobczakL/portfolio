import { useEffect, useRef, useState } from "react";
import { asciiGen } from "../utils/ASCIIGen";
import videoMedia from "../assets/images/test.mov";
import testImg from "../assets/images/test.jpg";
import { Box } from "@chakra-ui/react";

export default function AsciiArt() {
    const canvasRef = useRef(null);
    const targetRef = useRef(null);
    const parentRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current && targetRef.current && parentRef.current) {
            const config = {
                width: parentRef.current.offsetWidth,
                height: parentRef.current.offsetHeight,
            };
            asciiGen(testImg, canvasRef.current, targetRef.current, config);
        }
    }, [canvasRef, targetRef, parentRef]);

    return (
        <Box ref={parentRef} w="100vw" h="100vh" overflow="none">
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            <pre ref={targetRef}></pre>
        </Box>
    );
}
