const changeThemeColor = (
	entries: IntersectionObserverEntry[],
	divRef: React.RefObject<HTMLDivElement>,
	addClass: string,
	removeClass?: string,
) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			removeClass && divRef.current?.classList.remove(removeClass);
			divRef.current?.classList.add(addClass);
		}
	});
};
export default changeThemeColor;