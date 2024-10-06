import { VStack } from "@chakra-ui/react";
import ProjectItem from "../projectItem/ProjectItem";
import { useState, useRef, useEffect } from "react";

export default function ProjectsContent({ content }) {
    const [activeProjectTile, setActiveProjectTile] = useState(null);
    const projectTileRefs = useRef([]);

    useEffect(() => {
        if (activeProjectTile !== null && projectTileRefs.current[activeProjectTile]) {
            projectTileRefs.current[activeProjectTile].focus();
        }
    }, [activeProjectTile]);

    return (
        <VStack>
            {content.map((project, index) => (
                <ProjectItem
                    key={index}
                    ref={(el) => (projectTileRefs.current[index] = el)}
                    project={project}
                    isActive={activeProjectTile === index}
                    onMouseEnter={() => setActiveProjectTile(index)}
                    onMouseLeave={() => setActiveProjectTile(null)}
                />
            ))}
        </VStack>
    );
}
