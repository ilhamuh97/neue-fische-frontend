import { useEffect, useRef } from "react";
import "./style.css";

function Index() {
	// 1. Explicitly type the ref as an HTMLDivElement
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const card = cardRef.current;
		if (!card) return;

		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			const { left, top, width, height } = card.getBoundingClientRect();

			const x = (clientX - left - width / 2) / (width / 2);
			const y = (clientY - top - height / 2) / (height / 2);

			// TypeScript is happy now because card is guaranteed to be an HTMLElement
			card.style.setProperty("--x-rotation", `${y * -8}deg`);
			card.style.setProperty("--y-rotation", `${x * 8}deg`);
		};

		const handleMouseLeave = () => {
			card.style.setProperty("--x-rotation", "0deg");
			card.style.setProperty("--y-rotation", "0deg");
		};

		window.addEventListener("mousemove", handleMouseMove);
		card.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			card.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<section className="awwwards-hero">
			{/* Kinetic Ambient Grid Mesh */}
			<div className="noise-overlay"></div>
			<div className="grid-mesh"></div>

			<div className="interactive-stage" ref={cardRef}>
				{/* Architectural Metadata */}
				<div className="meta-header">
					<span className="serial-number">// UI-2026.LAB</span>
					<span className="status-badge">Available for License</span>
				</div>

				{/* Dramatic Typography Split Layout */}
				<h1 className="kinetic-title">
					<span className="word-row offset-left">Ultimate</span>
					<span className="word-row emphasis-italic">Modern</span>
					<span className="word-row offset-right">UI <span className="glyph">®</span></span>
				</h1>

				{/* Asymmetric Content Block */}
				<div className="asymmetric-layout">
					<div className="abstract-canvas">
						<div className="canvas-pulse"></div>
					</div>

					<div className="content-aside">
						<p className="editorial-subtitle">
							Breaking standard structural rigidities. This framework introduces kinetic depth physics, fluid micro-interactions, and experimental viewport layouts designed exclusively for award-winning digital storefronts.
						</p>

						{/* Super-Interactive Premium Button Cluster */}
						<div className="magnetic-button-group">
							<button className="btn-kinetic btn-kinetic-primary">
                         <span className="btn-marquee-wrapper">
                            <span className="btn-text">Initialize Project</span>
                            <span className="btn-text" aria-hidden="true">Initialize Project</span>
                         </span>
							</button>

							<button className="btn-kinetic btn-kinetic-secondary">
								<span className="btn-circle-magnet"></span>
								<span className="btn-secondary-text">Explore Blueprint</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Index;