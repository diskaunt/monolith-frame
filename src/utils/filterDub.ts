const filterDub = (items: Array<HTMLElement | null>) => {
  let itemsCollect = new Set(items);
  return Array.from(itemsCollect);
};

export default filterDub;

