const scrollToVerticalTarget = (
  entries: IntersectionObserverEntry[],
  options: { behavior?: ScrollBehavior; block?: ScrollLogicalPosition, inline?: ScrollLogicalPosition }
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.scrollIntoView(options);
    }
  });
};
export default scrollToVerticalTarget;
