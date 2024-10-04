import { Box, Grid } from "@chakra-ui/react";
import Tile from "../tile/Tile";
import CollapsedContent from "../ui/collapse/CollapsedContent";
import { useState, useEffect, useRef } from "react";

export default function TileList({ viewData }) {
    const [activeTile, setActiveTile] = useState(null);
    const tileRefs = useRef({});

    const handleTileClick = (key) => {
        setActiveTile((prevKey) => (prevKey === key ? null : key));
    };

    const handleClickOutside = (event) => {
        if (
            activeTile &&
            !tileRefs.current[activeTile].contains(event.target)
        ) {
            setActiveTile(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeTile]);

    return (
        <Box h="100%">
            <Grid templateRows="repeat(3, 1fr)" h="100%">
                {Object.keys(viewData).map((key, index) => {
                    return (
                        <Box
                            key={index}
                            ref={(el) => (tileRefs.current[key] = el)}
                            onClick={() => handleTileClick(key)}
                        >
                            <Tile title={key} number={index}>
                                <CollapsedContent
                                    content={viewData[key].content}
                                    isOpen={activeTile === key}
                                />
                            </Tile>
                        </Box>
                    );
                })}
            </Grid>
        </Box>
    );
}
