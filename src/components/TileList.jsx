import Tile from "./Tile";
import { Box } from "@chakra-ui/react";

export default function TileList({data}) {
    return (
        <Box
            display="grid"
            h="100%"
            w="100%"
        >
            {data ? data.map((key, index) => (
                <Tile
                    key={key}
                    title={key}
                    description={index}
                />
            )) : null}
        </Box>
    );
}
