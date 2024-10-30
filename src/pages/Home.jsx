import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/header/Header"
import TileList from "../components/tileList/TileList";
import AboutContent from "../components/content/AboutContent";
import ProjectsContent from "../components/content/ProjectsContent";
import ContactContent from "../components/content/ContactContent";
import ParseJSON from "../utils/ParseJSON";

export default function Home() {
    const tileContentComponent = {
        About: AboutContent,
        Projects: ProjectsContent,
        Contact: ContactContent,
    };

    const [viewData, setViewData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await ParseJSON("data.json");
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
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (viewData) {
            console.log("Fetched data:", viewData);
        }
    }, [viewData]);

    return (
        <>
            {viewData && <TileList viewData={viewData} />}
        </>
    );
}
