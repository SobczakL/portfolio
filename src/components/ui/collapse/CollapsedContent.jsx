import { Button, Box, Collapse, useDisclosure } from "@chakra-ui/react";

export default function CollapsedContent({ content, isOpen }) {
    return (
        <Collapse in={isOpen} animateOpacity>
            <Box
                color="white"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
            >
                <p>hello from collapse</p>
                {content}
            </Box>
        </Collapse>
    );
}
