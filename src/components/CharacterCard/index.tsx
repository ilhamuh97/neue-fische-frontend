import type { ReactElement } from "react";
import "./style.css";

export type Character = {
	id: number;
	name: string;
	status: string;
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

export default function Index({ character }: CharacterCardProps): ReactElement {
	const statusClass =
		character.status === "Alive"
			? "status-alive"
			: character.status === "Dead"
				? "status-dead"
				: "status-unknown";

	return (
		<div className="card">
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