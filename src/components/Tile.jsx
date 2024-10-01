import { Box, Text } from "@chakra-ui/react";

export default function Tile(title, description, link) {
    return (
        <Box
            bg="mainBg"
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            color="white"
            fontFamily="honey"
            border="solid white 1px"
        >
            <Text fontSize="mobile.subheader">{title}</Text>
            <Text fontSize="mobile.subheader" align="right">{description}</Text>
        </Box>
    );
}
