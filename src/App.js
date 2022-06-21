import AdminPage from "./Pages/AdminPage/AdminPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./Pages/Error/Error";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="*" element={<AdminPage />} />
			</Routes>
		</div>
	);
}

export default App;
