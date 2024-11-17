import { Flex } from "@chakra-ui/react";
import ProjectItem from "../projectItem/ProjectItem";

export default function ProjectList({ projectContent }) {

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
                                project={project}
                            >
                            </ProjectItem>
                        </>
                    )
                }))}
        </Flex>
    );
}
