import { Box, Text } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box
            bg="mainBg"
            color="white"
            maxH="auto"
            boxSizing="border-box"
            padding={["12px", "16px"]}
            border="solid white 1px"
            fontFamily="honey"
        >
            <Text fontSize={["header.sm", "header.md", "header.lg"]} align="center">Lucas Sobczak</Text>
        </Box>
    )
}
