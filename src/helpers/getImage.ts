const getImage = (name: string) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

export default getImage;
