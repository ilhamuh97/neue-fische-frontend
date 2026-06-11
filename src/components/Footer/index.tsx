import "./style.css";
import type {ReactElement} from "react";

function Footer(): ReactElement {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className="studio-footer">
			<div className="footer-grid">
				{/* Left Column: Direct Action & Status */}
				<div className="footer-col col-status">
					<span className="col-label">// INDEX STATUS</span>
					<p className="status-text">All systems nominal. Open for collaborative digital engineering globally.</p>
				</div>

				{/* Middle Column: Socials/Navigation Matrix */}
				<div className="footer-col col-links">
					<span className="col-label">// DIRECTORY</span>
					<ul className="footer-nav-list">
						<li><a href="/#projects" className="footer-link">Selected Work</a></li>
						<li><a href="/#lab" className="footer-link">The UI Lab</a></li>
						<li><a href="/#contact" className="footer-link">Initiate Brief</a></li>
					</ul>
				</div>

				{/* Right Column: Precise Copyright Meta */}
				<div className="footer-col col-meta">
					<span className="col-label">// LEGALITY</span>
					<p className="meta-text">Designed & Developed by Ilham.</p>
					<p className="meta-text">© {currentYear} — All Rights Reserved.</p>
				</div>
			</div>

			{/* Massive Immersive Background Branding Typography */}
			<div className="footer-giant-branding" aria-hidden="true">
				<span>ILHAM</span>
			</div>
		</footer>
	);
}

export default Footer;