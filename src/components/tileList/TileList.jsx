import { Box, Flex, Grid } from "@chakra-ui/react";
import Tile from "../tile/Tile";
import CollapsedContent from "../ui/collapse/CollapsedContent";
import { useState, useEffect } from "react";

export default function TileList({ viewData }) {
    const [activeTile, setActiveTile] = useState(Object.keys(viewData)[0]);
    const [windowSize, setWindowSize] = useState(null)

    const handleTileClick = (key) => {
        setActiveTile(prevKey => (prevKey === key ? null : key));
    };

    useEffect(() => {
        const handleResize = () => {
            setActiveTile(window.innerWidth >= 1200 ? Object.keys(viewData)[0] : null);
            setWindowSize(window.innerWidth)
            console.log(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // --- TODO:
    // Fix grid - currently not sizing correctly at all...


    return (
        <Box>
            {windowSize < 1200 ? (
            <Flex

            >
                {Object.entries(viewData).map(([key, { contentComponent: ContentComponent }], index) => (
                    <Box
                        key={index}
                        onClick={() => handleTileClick(key)}
                        cursor="pointer"
                    >
                        <Tile title={key} number={index} isActive={activeTile === key}>
                            <CollapsedContent isOpen={activeTile === key}>
                                <ContentComponent content={viewData[key].content} />
                            </CollapsedContent>
                        </Tile>
                    </Box>
                ))}
            </Flex>

            ):
            (
            <p></p>

            )
            }
        </Box>
    );
}
