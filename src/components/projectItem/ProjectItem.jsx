import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
export default function ProjectItem({
    project,
    isActive,
    onMouseEnter,
    onMouseLeave,
}) {
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
            cursor="pointer"
            h="auto"
        >
            <p>[]&gt;</p>
            <LinkBox>
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
                            <Text>{project.year}</Text>
                        </Box>
                        <Text>{project.description}</Text>
                        <Text>TECH: {project.stack}</Text>
                    </Box>
                    <LinkOverlay
                        isExternal
                        href={project.link}
                        mt="auto"
                        minW="fit-content"
                        fontSize={[
                            "projectDetails.sm",
                            "projectDetails.md",
                            "projectDetails.lg",
                        ]}
                        _hover={{ textDecoration: "underline" }}
                    >
                        LINK -&gt;
                    </LinkOverlay>
                </Box>
            </LinkBox>
        </Box>
    );
}
