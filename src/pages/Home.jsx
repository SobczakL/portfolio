import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import TileList from "../components/tileList/TileList";
import ParseJSON from "../utils/ParseJSON";

export default function Home() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await ParseJSON("data.json");
                setData(data);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
    return (
        <Box h="100vh">
            <TileList
                data={data}
            />
        </Box>
    );
}
