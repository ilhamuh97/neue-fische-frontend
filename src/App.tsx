import './App.css'
import Footer from "./components/Footer";
import Title from "./components/Title";
import type {ReactElement} from "react"; // This houses your Title/Hero component

function App(): ReactElement {
	return (
		<main className="studio-viewport-wrapper">
			{/* Immersive Cinematic Title/Hero Section */}
			<Title />

			{/* Structural High-Concept Footer Section */}
			<Footer />
		</main>
	)
}

export default App;