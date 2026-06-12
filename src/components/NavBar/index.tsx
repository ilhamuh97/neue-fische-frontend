import { Link } from "react-router-dom";
import "./style.css";

function Index() {
	return (
		<div className="header">
			<div className="nav">
				<Link to="/" className="nav-link">Home</Link>
				<Link to="/characters" className="nav-link">Characters</Link>
			</div>
		</div>
	);
}

export default Index;