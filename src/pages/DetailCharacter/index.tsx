import "./style.css";
import { type NavigateFunction, useNavigate, useParams} from "react-router-dom";
import CharacterCard, {type Character} from "../../components/CharacterCard";
import {useCharacters} from "../../hooks/useCharacters.tsx";

function Index() {
	const { id } = useParams();
	const {characters} = useCharacters();

	const nav: NavigateFunction = useNavigate();
	const character: Character | undefined = characters.find(
		(character: Character): boolean => character.id.toString() === id
	);

	if (!character) {
		return <h1>Character not found</h1>;
	}

	return (
		<div className="page">
			<button className="button back" onClick={() => nav(-1)}>
				Back
			</button>
			<CharacterCard character={character} />
		</div>
	);
}

export default Index;