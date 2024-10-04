import { Box } from "@chakra-ui/react";
import Tile from "../tile/Tile";
import CollapsedContent from "../ui/collapse/CollapsedContent";

export default function TileList({ viewData, tileContent }) {
    return (
        <Box>
            {Object.keys(viewData).map((key, index) => {
                return (
                    <Tile title={key} number={1} key={index}>
                        <CollapsedContent content={tileContent[key]} />
                    </Tile>
                );
            })}
        </Box>
    );
}
