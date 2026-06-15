import {type Context, createContext, type Dispatch, type SetStateAction} from "react";
import type {Character} from "../components/CharacterCard";

export type CharactersContextType = {
	characters: Character[],
	setCharacters: Dispatch<SetStateAction<Character[]>>;
}


export const CharactersContext: Context<CharactersContextType | undefined> = createContext<CharactersContextType | undefined>(undefined);
