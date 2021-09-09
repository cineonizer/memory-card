const getRandomCharacter = (charactersObj) => {
  const charactersArr = Object.keys(charactersObj);
  const randomCharacter =
    charactersArr[Math.floor(Math.random() * charactersArr.length)];
  return randomCharacter;
};

export { getRandomCharacter };
