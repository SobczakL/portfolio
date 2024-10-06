import { Box } from "@chakra-ui/react";

export default function AboutContent({content}) {
    return (
        <Box fontSize={["body.sm", "body.md", "body.lg"]}>
            <p>
                {content.name}
            </p>
        </Box>
    );
}
