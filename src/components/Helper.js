// a helper method to generate a random character and return its properties (name and url)
const getRandomCharacter = (charactersObj) => {
  // assign a variable to an array of all the keys from the object of characters
  const charactersKeys = Object.keys(charactersObj);
  // the Math.random() method will return a floating point in the range 0 to less than 1
  // multiply the length of the array (36) to get a floating value between 0 and 36
  // the Math.floor() method will round the value down to its nearest integer
  // then access the charactersKeys array with the random index which will return a string of a random character
  const randomCharacter = charactersKeys[Math.floor(Math.random() * charactersKeys.length)];
  // access and return the charactersObj object
  return charactersObj[randomCharacter];
};

export { getRandomCharacter };
