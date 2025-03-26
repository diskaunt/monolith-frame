import React from 'react';

const scrollToVerticalTarget = (
  entries: IntersectionObserverEntry[],
	target: React.RefObject<HTMLElement> | null,
  options: {
    behavior: ScrollBehavior;
    block: ScrollLogicalPosition;
    inline: ScrollLogicalPosition;
  } = {
    behavior: 'smooth',
    block: "nearest",
    inline: "nearest"
  },
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.scrollIntoView(options);

      target?.current?.scrollIntoView(options);
    }
  });
};
export default scrollToVerticalTarget;
