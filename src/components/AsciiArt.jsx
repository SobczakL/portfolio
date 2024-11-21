import { useEffect, useRef } from "react";
import testImg from "../assets/images/test.jpg";
import { Box } from "@chakra-ui/react";
import { ASCIIGen } from "../utils/ASCIIGen";

export default function AsciiArt() {
    const asciiRef = useRef();

    useEffect(() => {
        ASCIIGen(testImg, asciiRef.current);
    }, []);

    return (
        <Box h="100%">
            <pre
                ref={asciiRef}
                style={{
                    fontFamily: "monospace",
                    whiteSpace: "pre",
                    overflow: "auto",
                    minHeight: "600px",
                    maxHeight: "900px",
                    width: "900px",
                }}
            ></pre>
        </Box>
    );
}
