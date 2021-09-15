import React, { useState, useEffect } from 'react';
import Card from './Card';
import characters from './Characters';
import { getRandomCard } from './Helper';
import uniqid from 'uniqid';
import '../css/Main.css';
import { act } from 'react-dom/test-utils';

const Main = (props) => {
  const [level, setLevel] = useState(1);
  const [numOfCards, setNumOfCards] = useState(4);
  const [activeDeck, setActiveDeck] = useState([]);
  const [discardDeck, setDiscardDeck] = useState([]);

  const { currentScore, incrementCurrentScore } = props;

  // effect hook for when the component is mounted: set the activeDeck state to the temp array of characters that was created
  useEffect(() => {
    setActiveDeck(() => {
      const newDeck = []
      while (newDeck.length !== numOfCards) {
        const randomCard = getRandomCard(characters);
        // if the array does not contain a duplicate character and the character was not discarded (already used) then push the character into the array
        if (!newDeck.includes(randomCard) && !discardDeck.includes(randomCard)) {
          newDeck.push(randomCard);
        }
      }
      return newDeck;
    })
  }, [numOfCards]);

  // effect hook for when the currentScore prop changes: shuffle the deck and rerender
  useEffect(() => {
    if (currentScore && activeDeck.every(card => card.isClicked)) {
      activeDeck.map((card) =>
        setDiscardDeck((prevDiscardDeck) => [...prevDiscardDeck, card])
      );
      setLevel(level + 1);
    }
    // a method that randomizes the elements in the activeDeck array by reassigning the index (i) with a random index (j)
    setActiveDeck((prevActiveDeck) => {
      const shuffledDeck = [...prevActiveDeck];
      for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
      }
      return shuffledDeck;
    });
  }, [currentScore]);

  useEffect(() => {
    const gridColumns = document.querySelector('.main-container');
    switch (level) {
      case 2:
        setNumOfCards(8);
        break;
      case 3:
        setNumOfCards(10);
        gridColumns.style.gridTemplateColumns = `repeat(5, 1fr)`;
        break;
      case 4:
        setNumOfCards(14);
        gridColumns.style.gridTemplateColumns = 'repeat(7, 1fr)';
        break;
      default:
        return;
    }
  }, [level])

  return (
    <div className="main-wrapper">
      <div className="main-container">
        {activeDeck.map((card) => {
          return (
            <Card
              card={card}
              key={uniqid()}
              incrementCurrentScore={incrementCurrentScore}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
