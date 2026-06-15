import {type ChangeEventHandler, type ReactElement, type SubmitEventHandler, useState, type SubmitEvent} from "react";
import type {Character} from "../../components/CharacterCard";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {useCharacters} from "../../components/hooks/useCharacters.tsx";

function Index(): ReactElement {
	const nav: NavigateFunction = useNavigate();
	const {setCharacters} = useCharacters();


	const [newChar, setNewChar] = useState({
		name: "", status: "Alive", species: "Human"
	});

	const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement, HTMLInputElement | HTMLSelectElement> = (event) => {
		setNewChar({...newChar, [event.target.name]: event.target.value});
	}

	const handleSubmit: SubmitEventHandler = (event: SubmitEvent<HTMLFormElement>): void => {
		event.preventDefault();

		setCharacters((prevCharacters: Character[]): Character[] => [...prevCharacters, {
			... newChar,id: prevCharacters.length+1
		} as Character]);

		nav("/characters");
	}

	return (
		<div className="page">
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input name={"name"} placeholder={"Name"} type={"text"} onChange={handleChange}/>
				</label>
				<label>
					Status
					<select name={"status"} onChange={handleChange} defaultValue={newChar.status}>
						<option key={"alive"} value={"Alive"}>Alive</option>
						<option key={"dead"} value={"Dead"}>Dead</option>
						<option key={"unknown"} value={"unknown"}>Unknown</option>
					</select>
				</label>
				<label>
					Species
					<select name={"species"} onChange={handleChange} defaultValue={newChar.species}>
						<option key={"human"} value={"Human"}>Human</option>
						<option key={"alien"} value={"Alien"}>Alien</option>
					</select>
				</label>
				<button type={"submit"}> Add </button>
				<button type={"reset"}> Reset </button>
			</form>
		</div>
	);
}

export default Index;