import React, { useState, useEffect } from 'react';
import Card from './Card';
import characters from './Characters';
import { getRandomCard, resetAllClickedCards } from './Helper';
import GameOver from './GameOver';
import uniqid from 'uniqid';
import '../css/Main.css';

const Main = (props) => {
  const [level, setLevel] = useState(1);
  const [numOfCards, setNumOfCards] = useState(4);
  const [activeDeck, setActiveDeck] = useState([]);
  const [discardDeck, setDiscardDeck] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const { currentScore, incrementCurrentScore, resetCurrentScore, updateBestScore } = props;

  // effect hook for when the state numOfCards changes: when numOfCards changes, the level changes, so set the activeDeck to new cards
  useEffect(() => {
    setActiveDeck(() => {
      const newDeck = [];
      while (newDeck.length !== numOfCards) {
        const randomCard = getRandomCard(characters);
        // if the array does not contain a duplicate character and the character was not discarded (already used) then push the character into the array
        if (
          !newDeck.includes(randomCard) &&
          !discardDeck.includes(randomCard)
        ) {
          newDeck.push(randomCard);
        }
      }
      return newDeck;
    });
  }, [numOfCards]);

  // effect hook for when the currentScore prop changes: shuffle the deck and rerender
  useEffect(() => {
    // if currentScore is greater than 0 and every card in the activeDeck is clicked then discard those cards
    if (currentScore && activeDeck.every((card) => card.isClicked)) {
      activeDeck.map((card) =>
        setDiscardDeck((prevDiscardDeck) => [...prevDiscardDeck, card])
      );
      setLevel(level + 1);
    }
    // a method that randomizes the elements in the activeDeck array by reassigning the index (i) with a random index (j)
    // setActiveDeck((prevActiveDeck) => {
    //   const shuffledDeck = [...prevActiveDeck];
    //   for (let i = shuffledDeck.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    //   }
    //   return shuffledDeck;
    // });
  }, [currentScore]);

  // effect hook for when the level state changes: set the state numOfCards to a higher number depending on the level
  useEffect(() => {
    const gridColumns = document.querySelector('.cards-container');
    let numOfColumns = 4;
    switch (level) {
      case 1:
        console.log('shouldnt it run?')
        setNumOfCards(4);
        break;
      case 2:
        setNumOfCards(8);
        break;
      case 3:
        setNumOfCards(10);
        numOfColumns = 5;
        break;
      case 4:
        setNumOfCards(14);
        numOfColumns = 7;
        break;
      default:
        return;
    }
    gridColumns.style.gridTemplateColumns = `repeat(${numOfColumns}, 1fr)`;
  }, [level]);

  const handleNewGameClickEvent = () => {
    updateBestScore()
    setGameOver(false)
    resetAllClickedCards(characters)
    resetCurrentScore()
    setDiscardDeck([])
    setLevel(1)
  };

  return (
    <div className="main-wrapper">
      {gameOver ? (
        <div className="game-over-container">
          <GameOver handleNewGameClickEvent={handleNewGameClickEvent} />
        </div>
      ) : (
        <div className="cards-container">
          {activeDeck.map((card) => (
            <Card
              card={card}
              key={uniqid()}
              incrementCurrentScore={incrementCurrentScore}
              setGameOver={setGameOver}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
