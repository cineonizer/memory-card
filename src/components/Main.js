import React, { useState, useEffect } from 'react';
import Card from './Card';
import characters from './Characters';
import { getRandomCard, setCardIsActive } from './Helper';
import '../css/Main.css';

const Main = (props) => {
  const [level, setLevel] = useState(1);
  const [numOfCards, setNumOfCards] = useState(4);
  const [activeDeck, setActiveDeck] = useState([]);
  const [discardDeck, setDiscardDeck] = useState([]);

  const { currentScore, incrementCurrentScore } = props;

  // effect hook for when the component is mounted: set the activeDeck state to the temp array of characters that was created
  useEffect(() => {
    // a method to add a number of object of characters to a temporary array, which will later be assigned to the activeDeck state
    const getNewCards = () => {
      const tempActiveDeck = [];
      // loop until the temporary array contains the number of character cards required
      while (tempActiveDeck.length !== numOfCards) {
        const randomCard = getRandomCard(characters);
        // if the array does not contain a duplicate character and the character was not discarded (already used) then push the character into the array
        if (
          !tempActiveDeck.includes(randomCard) &&
          !discardDeck.includes(randomCard)
        ) {
          tempActiveDeck.push(randomCard);
          // set character's isActive property to true since it's now being used
          setCardIsActive(randomCard, true);
        }
      }
      return tempActiveDeck;
    };
    console.log(activeDeck);
    const newDeck = getNewCards();
    setActiveDeck(newDeck);
  }, []);

  // effect hook for when the currentScore prop changes: shuffle the deck and rerender
  useEffect(() => {
    const shuffleDeck = () => {
      const tempActiveDeck = activeDeck;
      // a method that randomizes the elements in an array by reassigning the index (i) with a random index (j)
      for (let i = activeDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempActiveDeck[i], tempActiveDeck[j]] = [
          tempActiveDeck[j],
          tempActiveDeck[i],
        ];
      }
      return tempActiveDeck;
    };

    if (currentScore) {
      console.log(activeDeck);
      const shuffledDeck = shuffleDeck();
      setActiveDeck(shuffledDeck);
    }
  }, [currentScore]);

  return (
    <div className="main-wrapper">
      <div className="main-container">
        {activeDeck.map((card) => {
          return (
            <Card
              key={card.id}
              url={card.url}
              name={card.name}
              incrementCurrentScore={incrementCurrentScore}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
