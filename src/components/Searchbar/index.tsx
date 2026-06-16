import type { ChangeEvent, ReactNode } from "react";
import "./style.css";

type SearchbarProps = {
	searchTerm: string;
	handleSearch: (value: string) => void;
};

export default function Index({searchTerm, handleSearch,}: SearchbarProps): ReactNode {
	return (
		<input
			type="text"
			placeholder="Search character..."
			value={searchTerm}
			onChange={(event: ChangeEvent<HTMLInputElement>) =>
				handleSearch(event.target.value)
			}
			className="search-input"
		/>
	);
}