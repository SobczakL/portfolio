import { Box, Flex, Grid } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import ProjectItem from "../projectItem/ProjectItem";

export default function ProjectList({ projectContent }) {

    console.log(projectContent)
    return (
        <Flex
            direction="column"
        >
            {projectContent && (
                projectContent.map((project, index) => {
                    <>
                        <ProjectItem
                            key={index}
                            project={project}
                        >
                        </ProjectItem>
                    </>
                }))}
        </Flex>
    );
}
