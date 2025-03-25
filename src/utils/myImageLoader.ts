const myImageLoader = (src: string) => {
  const basePath =
    process.env.NODE_ENV === 'production' ? '/monolith-frame' : '';
  return `${basePath}${src}`;
};

export default myImageLoader;
