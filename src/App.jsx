import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start"
import Home from "./pages/Home"
import Header from "./components/header/Header";
import { Box } from "@chakra-ui/react";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={
                <Box h="100vh">
                    <Header />
                    <Home />
                </Box>
            } />
        </Routes>
    );
}

export default App;
