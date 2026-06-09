import './App.css'
import Footer from "./components/Footer";
import Title from "./components/Title"; // This houses your Title/Hero component

function App() {
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