import { Box, GridItem, Text } from "@chakra-ui/react";

export default function Tile({ title, number, children }) {
    return (
        <GridItem
            bg="mainBg"
            color="white"
            minH="100%"
            rowSpan="1fr"
            padding={["12px", "16px"]}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            border="solid white 1px"
            fontFamily="honey"
            fontSize={["subheader.sm", "subheader.md", "subheader.lg"]}
            _hover={{
                bg: "hoverBg",
            }}
        >
            <Text>{title}</Text>
            {children}
            <Text align="end">{number}</Text>
        </GridItem>
    );
}
