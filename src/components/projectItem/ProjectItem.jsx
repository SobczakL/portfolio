import { Box, Flex, Text } from "@chakra-ui/react";
import ProjectItemLinkWindow from "../projectItemLinkWindow/ProjectItemLinkWindow";
import { useState } from "react";
export default function ProjectItem({
    project,
    isActive,
    onMouseEnter,
    onMouseLeave,
}) {

    const [showDescription, setShowDescription] = useState(false)

    const handleReadMore = () => {
        setShowDescription(!showDescription)
    }


    return (
        <Box
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            display="flex"
            gap={["10px"]}
            minW="100%"
            paddingY={["10px", "12px", "16px"]}
            borderBottom="1px solid"
            fontSize={["body.sm", "body.md", "body.lg"]}
            tabIndex={0}
            h="auto"
            cursor="auto"
        >
            <p>[]&gt;</p>
            <Box
                display="flex"
                gap="10px"
                w="100%"
                justifyContent="space-between"
            >
                <Box display="flex" flexDir="column" gap="8px">
                    <Box>
                        <Text
                            fontSize={[
                                "projectDetails.sm",
                                "projectDetails.md",
                                "projectDetails.lg",
                            ]}
                        >
                            PR. NAME
                        </Text>
                        <Text
                            textAlign="top"
                            fontSize={[
                                "projectTitle.sm",
                                "projectTitle.md",
                                "projectTitle.lg",
                            ]}
                            bg={isActive ? "accentTeal" : "none"}
                            color={isActive ? "black" : "none"}
                            w="fit-content"
                        >
                            {project.title}
                        </Text>
                        <Flex alignItems="center" gap="10px">
                            <Text>{project.year}</Text>
                            <Box w="10px" h="10px" backgroundColor={isActive ? "white" : "accentTeal"}
                            ></Box>
                            &#9166;
                        </Flex>
                    </Box>
                    <Flex direction="column" gap="8px" display={isActive ? "block" : "none"}>
                        <Text>{project.description}</Text>
                        <Text>TECH: {project.stack}</Text>
                    </Flex>
                </Box>
                <Text
                    mt="auto"
                    minW="fit-content"
                    fontSize={[
                        "projectDetails.sm",
                        "projectDetails.md",
                        "projectDetails.lg",
                    ]}
                    _hover={{ textDecoration: "underline" }}
                >
                    <a href={project.link}>
                    LINK -&gt;
                    </a>
                </Text>
            </Box>
            <ProjectItemLinkWindow isActive={isActive} link={project.link} />
        </Box>
    );
}
