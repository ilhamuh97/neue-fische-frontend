import {type ReactElement, useState} from "react";
import Searchbar from "../../components/Searchbar";
import CharacterCard, { type Character } from "../../components/CharacterCard";
import "./style.css";
import {useCharacters} from "../../components/hooks/useCharacters.tsx";

export default function Index(): ReactElement {
	const {characters} = useCharacters();

	console.log(characters)

	const [searchTerm, setSearchTerm] = useState<string>("");
	const [visibleCount, setVisibleCount] = useState<number>(5);

	const handleSearch = (value: string): void => {
		setSearchTerm(value);
	};

	const filteredCharacters: Character[] = characters.filter((character) =>
		character.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const showMoreCharacters = (): void => {
		setVisibleCount(visibleCount + 5);
	};

	return (
		<div className="page">
			<h1 className="title">Rick & Morty Galerie</h1>

			<div className="search">
				<Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
			</div>

			{filteredCharacters.length === 0 && (
				<p className="empty">No character found.</p>
			)}

			<div className="grid">
				{filteredCharacters
				.slice(0, visibleCount)
				.map((character) => (
					<CharacterCard key={character.id} character={character} />
				))}
			</div>

			{visibleCount < filteredCharacters.length && (
				<button className="button" onClick={showMoreCharacters}>
					Show More
				</button>
			)}
		</div>
	);
}