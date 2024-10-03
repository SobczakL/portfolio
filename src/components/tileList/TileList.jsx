import { Box } from "@chakra-ui/react";
import Tile from "../tile/Tile";

export default function TileList({data}) {
    return (
       <Box>
            <Tile
            title={"Title 1"}
            number={1}
            />
       </Box>
    )
}
