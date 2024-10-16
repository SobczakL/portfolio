import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start"
import Home from "./pages/Home"

function App() {
	return (
		<Routes>
            
            <Route path="/" element={<Start/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
	);
}

export default App;
