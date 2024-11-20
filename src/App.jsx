import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start"
import Home1 from "./pages/Home1"

function App() {
    return (
        <div className="app">
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={
                <Home1 />
            } />
        </Routes>
        </div>
    );
}

export default App;
