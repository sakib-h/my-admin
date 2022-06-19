import AdminPage from "./Pages/AdminPage/AdminPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<AdminPage />} />
				<Route path="home" element={<AdminPage />} />
			</Routes>
		</div>
	);
}

export default App;
