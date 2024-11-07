import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import TileList from "../components/tileList/TileList";
import AboutContent from "../components/content/AboutContent";
import ProjectsContent from "../components/content/ProjectsContent";
import ContactContent from "../components/content/ContactContent";
import portfolioData from "../data/data.json";

export default function Home() {
    const tileContentComponent = {
        About: AboutContent,
        Projects: ProjectsContent,
        Contact: ContactContent,
    };

    const [viewData, setViewData] = useState(null);

    useEffect(() => {
        const data = { ...portfolioData };

        Object.keys(tileContentComponent).forEach((key) => {
            if (data[key]) {
                data[key].contentComponent = tileContentComponent[key];
            } else {
                data[key] = {
                    contentComponent: tileContentComponent[key],
                };
            }
        });

        setViewData(data);
    }, []);

    useEffect(() => {
        if (viewData) {
            console.log("Fetched data:", viewData);
        }
    }, [viewData]);

    return(
        <Box h="100%">
            <Header />
            {viewData && <TileList viewData={viewData} />}
        </Box>
    )
}
