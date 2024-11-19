import { Flex } from "@chakra-ui/react";
import ProjectItem from "../projectItem/ProjectItem";
import { useEffect, useRef, useState } from "react";

export default function ProjectList({ projectContent }) {

    const [activeProject, setActiveProject] = useState(projectContent[0])
    const projectRef = useRef({})

    const handleProjectClick = (key) => {
        setActiveProject(key)
    }

    const handleClickOutside = (event) => {
        if (
            activeProject &&
            !projectRef.current[activeProject]?.contains(event.target)
        ) {
            setActiveProject(projectContent[0])
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [activeProject])

    return (
        <Flex
            h="auto"
            direction="column"
        >
            {projectContent && (
                projectContent.map((project, index) => {
                    return (
                        <>
                            <ProjectItem
                                key={index}
                                ref={(el) => (projectRef.current[index] = el)}
                                project={project}
                                isActive={activeProject === index}
                            >
                            </ProjectItem>
                        </>
                    )
                }))}
        </Flex>
    );
}
