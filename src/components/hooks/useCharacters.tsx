import { useContext } from "react";
import {CharactersContext} from "../../context/CharactersContext.tsx";

export function useCharacters() {
	const context = useContext(CharactersContext);

	if (!context) {
		throw new Error(
			"context is not available"
		);
	}

	return context;
}