import type {ChangeEvent, ReactElement} from "react";

type SearchbarProps = {
	searchTerm: string;
	handleSearch: (value: string) => void;
};

export default function Index({searchTerm, handleSearch,}: SearchbarProps): ReactElement {
	return (
		<input
			type="text"
			placeholder="Search character..."
			value={searchTerm}
			onChange={(event: ChangeEvent<HTMLInputElement, HTMLInputElement>): void =>
				handleSearch(event.target.value)
			}
			style={{
				padding: "10px",
				width: "300px",
				borderRadius: "8px",
				border: "1px solid gray",
				marginBottom: "20px",
			}}
		/>
	);
}
