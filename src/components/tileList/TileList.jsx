import { Box } from "@chakra-ui/react";
import Tile from "../tile/Tile";
import AboutContent from "../content/AboutContent";
import ProjectsContent from "../content/ProjectsContent";
import ContactContent from "../content/ContactContent";
import CollapsedContent from "../ui/collapse/CollapsedContent";

export default function TileList({ viewData }) {
    const tileContent = {
        About: <AboutContent />,
        Projects: <ProjectsContent />,
        Contact: <ContactContent />,
    };

    return (
        <Box>
            {viewData && Object.keys(viewData).map((key, index) => {
                return (
                    <Tile title={key} number={1} key={index}>
                        <CollapsedContent content={tileContent[key]} />
                    </Tile>
                );
            })}
        </Box>
    );
}
