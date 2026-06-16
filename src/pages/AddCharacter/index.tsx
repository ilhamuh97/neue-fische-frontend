import {type ReactNode} from "react";
import type {Character} from "../../components/CharacterCard";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {useCharacters} from "../../hooks/useCharacters.tsx";
import {useForm} from "react-hook-form";
import "./style.css";
import {v4 as uuidv4} from 'uuid';

type FormValues = {
	name: string,
	status: "Alive" | "Dead" | "unknown",
	species: string,
	type: string,
	gender: "Male" | "Female" | "unknown"
	image: string
}

function Index(): ReactNode {
	const {register, handleSubmit, formState} = useForm<FormValues>({mode: "onChange"});
	const {errors, isValid} = formState;
	const nav: NavigateFunction = useNavigate();
	const {setCharacters} = useCharacters();

	const onSubmit = (formData: FormValues) => {
		const uuid: string = uuidv4();

		setCharacters((prevCharacters: Character[]): Character[] => [...prevCharacters, {
				...formData,
				id: uuid
		} as Character]);

		nav("/characters");
	}


	return (
		<div className="page">
			<h1 className="title">Add New Character</h1>
			<form className={"form"} onSubmit={handleSubmit(onSubmit)}>
				<label>
					Name:
					<input
						{...register("name", {
							required: "Name is required",
							minLength: {
								value: 5,
								message: "Name must be at least 5 characters"
							}
						})}
					/>
					{errors.name && (
						<p className="error">{errors.name.message}</p>
					)}
				</label>
				<label>
					Status
					<select
						{...register("status", {required: "Status is required"})}
						defaultValue={"Alive"}
					>
						<option key={"alive"} value={"Alive"}>Alive</option>
						<option key={"dead"} value={"Dead"}>Dead</option>
						<option key={"unknown"} value={"unknown"}>Unknown</option>
					</select>
				</label>
				<label>
					Species
					<input {...register("species", {
							required: "Species is required",
							minLength: {
								value: 5,
								message: "Species must be at least 5 characters"
							}
						})
					}/>
					{errors.species && (
						<p className="error">{errors.species.message}</p>
					)}
				</label>
				<label>
					Type
					<input {...register("type", {
						required: "Type is required",
						minLength: {
							value: 5,
							message: "Type must be at least 5 characters"
						}
					})
					       }/>
					{errors.type && (
						<p className="error">{errors.type.message}</p>
					)}
				</label>
				<label>
					Gender
					<select
						{...register("gender", {required: "Gender is required"})}
						defaultValue={"Male"}
					>
						<option key={"male"} value={"Male"}>Male</option>
						<option key={"female"} value={"Female"}>Dead</option>
						<option key={"genderless "} value={"Genderless"}>Genderless</option>
						<option key={"unknown"} value={"unknown"}>Unknown</option>
					</select>
				</label>
				<label>
					Image URL:
					<input
						{...register("image", {
							required: true,
							pattern: {
								value: /https:\/\/.+\..+/, // Regex for https://{etwas}.{etwas}
								message: "Invalid URL"
							}
						})}
					/>
					{errors.image && (
						<p className="error">{errors.image.message}</p>
					)}
				</label>
				<div className="buttons">
					<button className="button add-button" type="submit" disabled={!isValid}>
						Add
					</button>

					<button className="button reset-button" type="reset">
						Reset
					</button>
				</div>
			</form>
		</div>
	);
}

export default Index;