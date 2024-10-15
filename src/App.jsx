import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start"

function App() {
	return (
		<Routes>
            <Route path="/" element={<Start/>}/>
        </Routes>
	);
}

export default App;
