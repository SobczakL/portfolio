import { Flex, VStack } from "@chakra-ui/react";
import ProjectItem from "../projectItem/ProjectItem";
import { useState } from "react";

export default function ProjectsContent({ content }) {
    const [activeProjectTile, setActiveProjectTile] = useState(null);

    return (
        <Flex
            direction="column"
        >
            {content.map((project, index) => (
                <ProjectItem
                    key={index}
                    project={project}
                    isActive={activeProjectTile === index}
                    onMouseEnter={() => setActiveProjectTile(index)}
                    onMouseLeave={() => setActiveProjectTile(null)}
                />
            ))}
        </Flex>
    );
}
