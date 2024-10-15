import { Collapse } from "@chakra-ui/react";

export default function CollapsedContent({ children, isOpen }) {
    return (
        <Collapse
            in={isOpen}
            animateOpacity
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </Collapse>
    );
}
