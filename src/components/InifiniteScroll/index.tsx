import { type ReactElement, type ReactNode, useEffect, useRef } from "react";

interface InfiniteScrollProps {
	children: ReactNode;
	loading: boolean;
	hasMore: boolean;
	loadMore: () => void;
}

// https://blog.logrocket.com/react-infinite-scroll/
export default function InfiniteScroll({children, loading, hasMore, loadMore,}: InfiniteScrollProps): ReactElement {
	const loaderRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!hasMore) return;

		const currentTarget = loaderRef.current;
		if (!currentTarget) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !loading) {
					loadMore();
				}
			},
			{
				threshold: 1,
			}
		);

		observer.observe(currentTarget);

		return () => {
			observer.disconnect();
		};
	}, [hasMore, loading, loadMore]);

	return (
		<>
			{children}
			<div ref={loaderRef} style={{ height: 40, display: "flex", justifyContent: "center", alignItems: "center" }}>
				{loading && <p>Loading more...</p>}
			</div>
		</>
	);
}