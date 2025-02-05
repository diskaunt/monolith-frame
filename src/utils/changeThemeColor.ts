const changeThemeColor = (
	entries: IntersectionObserverEntry[],
	divRef: React.RefObject<HTMLDivElement>,
	addClass: string,
	removeClass?: string,
) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			if(entry.target.clientWidth < window.innerWidth / 2) return
			removeClass && divRef.current?.classList.remove(removeClass);
			divRef.current?.classList.add(addClass);
		}
	});
};
export default changeThemeColor;