import { useContext } from "react";
import {CharactersContext, type CharactersContextType} from "../context/CharactersContext.tsx";

export function useCharacters(): CharactersContextType {
	const context: CharactersContextType | undefined = useContext(CharactersContext);

	if (!context) {
		throw new Error(
			"context is not available"
		);
	}

	return context;
}