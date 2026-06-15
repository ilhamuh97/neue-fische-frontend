import axios, { type AxiosResponse } from "axios";

import {type ReactElement, type RefObject, useCallback, useEffect, useRef, useState} from "react";
import Searchbar from "../../components/Searchbar";
import CharacterCard, {type Character} from "../../components/CharacterCard";
import {useCharacters} from "../../components/hooks/useCharacters.tsx";
import "./style.css";

export default function Index(): ReactElement {
	const {characters, setCharacters, nextUrl, setNextUrl} = useCharacters();
	const [loading, setLoading] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const loaderRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

	const handleSearch = (value: string): void => {
		setSearchTerm(value);
	};

	const loadMoreCharacters = useCallback(async (): Promise<void> => {
		if (!nextUrl || loading) return;

		setLoading(true);

		try {
			const response: AxiosResponse = await axios.get(nextUrl);
			setNextUrl(response.data.info.next)
			setCharacters((prev: Character[]): Character[] => [...prev, ...response.data.results]);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}, [loading, nextUrl, setCharacters, setNextUrl]);


	useEffect(() => {
		const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting) {
				void loadMoreCharacters()
			}
		});

		const current: HTMLDivElement | null = loaderRef.current;

		if (current) observer.observe(current);

		return (): void => {
			if (current) observer.unobserve(current);
			observer.disconnect();
		};
	}, [loadMoreCharacters]);

	return (
		<div className="page">
			<h1 className="title">Rick & Morty Galerie</h1>
			<div className="search">
				<Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
			</div>

			{characters.length === 0 && (
				<p className="empty">No character found.</p>
			)}

			<div className="grid">
				{characters
				.map((character) => (
					<CharacterCard key={character.id} character={character} />
				))}
			</div>

			{
				nextUrl ?
					<div ref={loaderRef} style={{ height: "20px" }}>
						{loading && <p>Loading...</p>}
					</div> : ""
			}
		</div>
	);
}