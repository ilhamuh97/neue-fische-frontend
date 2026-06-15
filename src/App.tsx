import {type ReactElement, useState} from "react";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailCharacter from "./pages/DetailCharacter";
import AddCharacter from "./pages/AddCharacter";
import {response} from "./response.ts";
import {CharactersContext} from "./context/CharactersContext.tsx";

function App(): ReactElement {
	const [characters, setCharacters] = useState(response);
	return (
		<CharactersContext.Provider value={{characters, setCharacters}}>
			<div className="app">
				<NavBar />

				<div className="page-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/characters/:id" element={<DetailCharacter />} />
						<Route path="/add" element={<AddCharacter />} />
					</Routes>
				</div>
			</div>
		</CharactersContext.Provider>
	);
}

export default App;