import { Box, Text } from "@chakra-ui/react";

export default function Tile({ title, number, children }) {
    return (
        <Box
            /* bg="mainBg" */
            h="100%"
            minH="fit-content"
            padding={["12px", "16px"]}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            border="solid white 1px"
            _hover={{
                bg: "hoverBg",
            }}
        >
            <Text>{title}</Text>
            {children}
            <Text>{number}</Text>
        </Box>
    );
}
