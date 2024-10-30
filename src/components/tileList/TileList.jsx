import { Box, Flex, Grid } from "@chakra-ui/react";
import Tile from "../tile/Tile";
import CollapsedContent from "../ui/collapse/CollapsedContent";
import { useState, useEffect, useRef } from "react";

export default function TileList({ viewData }) {
    const [activeTile, setActiveTile] = useState(Object.keys(viewData)[0]);
    const tileRefs = useRef({});
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const handleTileClick = (key) => {
        console.log(key)
        setActiveTile((prevKey) =>
            isDesktop
                ? prevKey === key
                    ? Object.keys(viewData)[0]
                    : key
                : prevKey === key
                    ? null
                    : key,
        );
    };

    const handleClickOutside = (event) => {
        if (
            activeTile &&
            !tileRefs.current[activeTile]?.contains(event.target)
        ) {
            setActiveTile(isDesktop ? Object.keys(viewData)[0] : null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeTile, isDesktop]);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Box>
            <Flex direction={isDesktop ? "row" : "column"} wrap="nowrap" h="full">
                {Object.keys(viewData).map((key, index) => {
                    const ContentComponent = viewData[key].contentComponent;
                    const isActive = activeTile === key
                    return ContentComponent ? (
                        <Box
                            key={index}
                            ref={(el) => (tileRefs.current[key] = el)}
                            onClick={() => handleTileClick(key)}
                            cursor="pointer"
                            h="full"
                            flex={
                                isDesktop
                                    ? isActive
                                        ? "2 1 60%"
                                        : "1 1 40%"
                                    : "1 1 auto"
                            }
                        >
                            <Tile
                                title={key}
                                number={index}
                                isActive={isActive}
                            >
                                <CollapsedContent isOpen={isActive}>
                                    <ContentComponent
                                        content={viewData[key].content}
                                    />
                                </CollapsedContent>
                            </Tile>
                        </Box>
                    ) : null;
                })}
            </Flex>
        </Box>
    );
}
