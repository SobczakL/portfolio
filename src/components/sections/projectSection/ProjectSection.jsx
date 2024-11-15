import { Box } from "@chakra-ui/react";
import ProjectList from "../../projectsList/ProjectList";

export default function ProjectSection({ projectData }) {

    return (
        <Box>
            <ProjectList projectContent={projectData.content}/>
        </Box>
    );
}
