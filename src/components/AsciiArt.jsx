import { useEffect, useRef } from "react";
import testImg from "../assets/images/test.jpg";
import { Box } from "@chakra-ui/react";
import { ASCIIGen } from "../utils/ASCIIGen";

export default function AsciiArt() {
    const parentRef = useRef();
    const canvasRef = useRef();
    const asciiOutputRef = useRef();

    useEffect(() => {
        ASCIIGen(testImg, parentRef.current, canvasRef.current, asciiOutputRef.current);
    }, []);

    return (
        <Box h="100%" color="white" opacity="95%">
            <Box ref={parentRef} w="400px" border="1px" borderColor="red" display="flex" textAlign="center">
                <canvas ref={canvasRef} style={{display: "none"}}></canvas>
                <pre
                    ref={asciiOutputRef}
                    style={{
                        fontFamily: "monospace",
                        whiteSpace: "pre",
                        overflow: "auto",
                    }}
                ></pre>
            </Box>
        </Box>
    );
}
