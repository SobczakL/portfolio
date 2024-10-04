import { Button, Box, Collapse, useDisclosure } from "@chakra-ui/react";

export default function CollapsedContent({content}) {
    const {isOpen, onToggle} = useDisclosure()
    return (
        <>
            <Button onClick={onToggle}>Click Me</Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                    p="40px"
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
        </>
    );
}
