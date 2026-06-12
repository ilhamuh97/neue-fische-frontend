import { type ReactElement } from "react";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailCharacter from "./pages/DetailCharacter";

function App(): ReactElement {
	return (
		<div className="app">
			<NavBar />

			<div className="page-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<Characters />} />
					<Route path="/characters/:id" element={<DetailCharacter />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;