import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import TileList from "../components/tileList/TileList";
import ParseJSON from "../utils/ParseJSON";

export default function Home() {
    const [viewData, setViewData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await ParseJSON("data.json");
                setViewData(data);
            }
            catch (error) {
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
        <Box h="100vh">
            <TileList
                data={viewData}
            />
        </Box>
    );
}
