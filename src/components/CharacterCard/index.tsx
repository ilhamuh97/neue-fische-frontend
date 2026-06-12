import type {ReactElement} from "react";

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
	return (
		<div
			style={{
				border: "1px solid lightgray",
				borderRadius: "10px",
				padding: "16px",
				width: "220px",
				textAlign: "center",
			}}
		>
			<img
				src={character.image}
				alt={character.name}
				style={{
					width: "100%",
					borderRadius: "10px",
				}}
			/>

			<h2>{character.name}</h2>

			<p>Status: {character.status}</p>
			<p>Species: {character.species}</p>
		</div>
	);
}
