import {useNavigate} from "react-router-dom";
import "./style.css";

function Index() {
	const nav = useNavigate();

	const doNav = (path: string) => {
		nav(path)
	}

	return (
		<div className="header">
			<div className="nav">
				<button onClick={() => doNav("/")} className="nav-link">Home</button>
				<button onClick={() => doNav("/characters")} className="nav-link">Characters</button>
				<button onClick={() => doNav("/add")} className="nav-link">Add</button>
			</div>
		</div>
	);
}

export default Index;