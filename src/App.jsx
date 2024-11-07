import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start"
import Home from "./pages/Home"
import { Box } from "@chakra-ui/react";

function App() {
    return (
        <div className="app">
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={
                <Home />
            } />
        </Routes>
        </div>
    );
}

export default App;
