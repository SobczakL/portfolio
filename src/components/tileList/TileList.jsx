import { Box, Grid } from "@chakra-ui/react";
import Tile from "../tile/Tile";
import CollapsedContent from "../ui/collapse/CollapsedContent";
import { useState, useEffect, useRef } from "react";

export default function TileList({ viewData }) {
    const [activeTile, setActiveTile] = useState(Object.keys(viewData)[0]);
    const tileRefs = useRef({});
    const [isDesktop, setIsDesktop] = useState(false);

    const handleTileClick = (key) => {
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
        if (typeof window !== 'undefined') {
            const handleResize = () => setIsDesktop(window.innerWidth >= 1200);
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeTile, isDesktop]);

    return (
        <Grid
            justifyItems="stretch"
            templateRows={isDesktop ? "repeat(2, minmax(1fr))" : "repeat(3, minmax(1fr))"}
            templateColumns={isDesktop ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
        >
            {Object.keys(viewData).map((key, index) => {
                const ContentComponent = viewData[key].contentComponent;
                return ContentComponent ? (
                    <Box
                        key={index}
                        ref={(el) => (tileRefs.current[key] = el)}
                        onClick={() => handleTileClick(key)}
                        cursor="pointer"
                        gridColumn={
                            isDesktop && activeTile === key ? "1 / 2" : "span 1"
                        }
                        gridRow={
                            isDesktop && activeTile === key ? "1 / span 2" : "auto"
                        }
                    >
                        <Tile
                            title={key}
                            number={index}
                            isActive={activeTile === key}
                        >
                            <CollapsedContent isOpen={activeTile === key}>
                                <ContentComponent
                                    content={viewData[key].content}
                                />
                            </CollapsedContent>
                        </Tile>
                    </Box>
                ) : null;
            })}
        </Grid>
    );
}
