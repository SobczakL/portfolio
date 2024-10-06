import { Box, Collapse } from "@chakra-ui/react";

export default function CollapsedContent({ children, isOpen }) {
    return (
        <Collapse in={isOpen} animateOpacity>
            {children}
        </Collapse>
    );
}
