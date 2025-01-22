const addActiveClassname = (
  entryes: IntersectionObserverEntry[],
  styles: { [key: string]: string }
) => {
  entryes.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.active);
    }
  });
};

export default addActiveClassname;
