import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ProjectItemLinkWindow({ isActive, link }) {
    const [mouseCoords, setMouseCoords] = useState({ x: null, y: null });

    const trackMouseMovement = (e) => {
        setMouseCoords({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener("mousemove", trackMouseMovement);
        return () => {
            document.removeEventListener("mousemove", trackMouseMovement);
        };
    }, []);
    document.addEventListener("mousemove", trackMouseMovement)

    return (
        <Box
            position="absolute"
            left={mouseCoords.x + 80}
            top={mouseCoords.y - 50}
            display={isActive && window.innerWidth >= 1200 ? "block" : "none"}
            pointerEvents="none"
        >
            <iframe src={link}
                style={{
                    overflow: "hidden",
                    width: "500px",
                    height: "300px"

                }}>
            </iframe>

        </Box>
    )
}
