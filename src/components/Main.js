import React, { useState, useEffect } from 'react';
import Card from './Card'
import characters from './Characters';
import { getRandomCharacter } from './Helper'
import '../css/Main.css';

const Main = () => {
  const [level, setLevel] = useState(1)
  const [numOfCharacters, setNumOfCharacters] = useState(4)
  const [activeCharacters, setActiveCharacters] = useState([])

  // call useEffect hook when component is mounted to simulate as if it's fetching character data
  useEffect(() => {
    [...Array(numOfCharacters)].forEach((index) => {
      const newCharacter = getRandomCharacter(characters)
      console.log(newCharacter)
      if (!activeCharacters.includes(newCharacter)) {
        setActiveCharacters(activeCharacters => [...activeCharacters, newCharacter])
      }
    });
  }, [])


  return (
    <div className="main-wrapper">
      <div className="main-container">{activeCharacters.map((character) => {
        console.log(activeCharacters)
        return <Card url={characters.character} />
      })}</div>
    </div>
  )
}

export default Main;