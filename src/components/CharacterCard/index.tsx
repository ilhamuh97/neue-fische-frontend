import type { ReactNode } from "react";
import "./style.css";
import {type NavigateFunction, useNavigate} from "react-router-dom";

export type Character = {
	id: number;
	name: string;
	status: "Alive" | "Dead" | "unknown";
	species: string;
	type: string;
	gender: string;

	origin: {
		name: string;
		url: string;
	};

	location: {
		name: string;
		url: string;
	};

	image: string;
	episode: string[];
	url: string;
	created: string;
};

type CharacterCardProps = {
	character: Character;
};

export default function Index({ character }: CharacterCardProps): ReactNode {
	const nav: NavigateFunction = useNavigate();
	const statusClass =
		character.status === "Alive"
			? "status-alive"
			: character.status === "Dead"
				? "status-dead"
				: "status-unknown";

	const toDetail = (path: string) => {
		console.log(path)
		nav(path)
	}
	return (
		<div className="card" onClick={() => toDetail(`/characters/${character.id}`)}>
			<img
				src={character.image}
				alt={character.name}
				className="card-image"
			/>

			<h2 className="card-title">{character.name}</h2>

			<div className={`status-badge ${statusClass}`}>
				{character.status}
			</div>

			<p>Species: {character.species}</p>
		</div>
	);
}