import axios, { type AxiosResponse } from "axios";
import { type ReactElement, useCallback, useMemo, useRef, useState } from "react";
import Searchbar from "../../components/Searchbar";
import CharacterCard, { type Character } from "../../components/CharacterCard";
import InfiniteScroll from "../../components/InifiniteScroll";
import { useCharacters } from "../../hooks/useCharacters.tsx";
import "./style.css";

export default function Index(): ReactElement {
	const { characters, setCharacters, nextUrl, setNextUrl } = useCharacters();
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const isFetching = useRef(false);

	const filteredCharacters = useMemo(() => {
		const lowerSearch = searchTerm.toLowerCase();
		return characters.filter((character) =>
			character.name.toLowerCase().includes(lowerSearch)
		);
	}, [characters, searchTerm]);

	const loadMoreCharacters = useCallback(async (): Promise<void> => {
		if (searchTerm || !nextUrl || isFetching.current) return;

		isFetching.current = true;
		setLoading(true);

		try {
			const response: AxiosResponse = await axios.get(nextUrl);
			setNextUrl(response.data.info.next);
			setCharacters((prev: Character[]) => [...prev, ...response.data.results]);
		} catch (err) {
			console.error("Failed to load more characters:", err);
		} finally {
			setLoading(false);
			isFetching.current = false;
		}
	}, [nextUrl, searchTerm, setCharacters, setNextUrl]);

	return (
		<div className="page">
			<h1 className="title">Rick & Morty Galerie</h1>

			<div className="search">
				<Searchbar searchTerm={searchTerm} handleSearch={setSearchTerm} />
			</div>

			{filteredCharacters.length === 0 && (
				<p className="empty">No character found.</p>
			)}

			<InfiniteScroll
				loading={loading}
				hasMore={Boolean(nextUrl) && !searchTerm}
				loadMore={loadMoreCharacters}
			>
				<div className="grid">
					{filteredCharacters.map((character) => (
						<CharacterCard key={character.id} character={character} />
					))}
				</div>
			</InfiniteScroll>
		</div>
	);
}