import {type ReactElement, useEffect, useState} from "react";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailCharacter from "./pages/DetailCharacter";
import AddCharacter from "./pages/AddCharacter";
import {CharactersContext} from "./context/CharactersContext.tsx";
import axios from "axios";
import type {Character} from "./components/CharacterCard";

function App(): ReactElement {
	const [characters, setCharacters] = useState([] as Character[]);
	const [nextUrl, setNextUrl] = useState("");

	useEffect(() => {
		axios.get("https://rickandmortyapi.com/api/character")
		.then((r) => {
			setCharacters(r.data.results);
			setNextUrl(r.data.info.next);
		}).catch((r) => console.error(r))
	},[]);

	return (
		<CharactersContext value={{characters, nextUrl, setCharacters, setNextUrl}}>
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
		</CharactersContext>
	);
}

export default App;