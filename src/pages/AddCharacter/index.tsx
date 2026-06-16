import {type ReactNode} from "react";
import type {Character} from "../../components/CharacterCard";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {useCharacters} from "../../hooks/useCharacters.tsx";

function Index(): ReactNode {
	const nav: NavigateFunction = useNavigate();
	const {setCharacters} = useCharacters();

	const submit = (formData: FormData) => {
		const newChar: Character = {
			name: formData.get("name"),
			status: formData.get("status"),
			species: formData.get("species")
		} as Character;

		setCharacters((prevCharacters: Character[]): Character[] => [...prevCharacters, {
				...newChar,
				id: prevCharacters.length+1.
		} as Character]);

		nav("/characters");
	}

	return (
		<div className="page">
			<form action={submit}>
				<label>
					Name:
					<input required={true} name={"name"} placeholder={"Name"} type={"text"} minLength={3}/>
				</label>
				<label>
					Status
					<select name={"status"} defaultValue={"Alive"}>
						<option key={"alive"} value={"Alive"}>Alive</option>
						<option key={"dead"} value={"Dead"}>Dead</option>
						<option key={"unknown"} value={"unknown"}>Unknown</option>
					</select>
				</label>
				<label>
					Species
					<select name={"species"} defaultValue={"Human"}>
						<option key={"human"} value={"Human"}>Human</option>
						<option key={"alien"} value={"Alien"}>Alien</option>
					</select>
				</label>
				<button className={"button"} type={"submit"}> Add </button>
				<button type={"reset"}> Reset </button>
			</form>
		</div>
	);
}

export default Index;