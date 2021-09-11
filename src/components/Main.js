import React, { useState, useEffect } from 'react';
import Card from './Card';
import characters from './Characters';
import { getRandomCharacter } from './Helper';
import '../css/Main.css';

const Main = () => {
  const [level, setLevel] = useState(1);
  const [numOfCharacters, setNumOfCharacters] = useState(4);
  const [activeCharacters, setActiveCharacters] = useState([]);

  // a method to add object of characters to a temporary array in order to set state to that array
  const addCharactersToArray = () => {
    const charactersArr = []
    // loop until the array contains the number of characters required
    while (charactersArr.length !== numOfCharacters) {
      const newCharacter = getRandomCharacter(characters)
      // if the array does not contain a duplicate character then push the character into the array
      if (!charactersArr.includes(newCharacter)) {
        charactersArr.push(newCharacter)
      }
    };
    return charactersArr;
  }

  // useEffect method for when the component is initially mounted
  useEffect(() => {
    // set the activeCharacters state to the array of characters that was created
    const newCharacters = addCharactersToArray();
    setActiveCharacters(newCharacters)
  }, []);

  return (
    <div className="main-wrapper">
      <div className="main-container">{activeCharacters.map((character) => {
        return <Card url={character.url} name={character.name} />
      })}</div>
    </div>
  )
}

export default Main;