import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import Die from './components/die/Die';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  //----------------------------------------------------------------->
  // check is wins game
  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);
  //----------------------------------------------------------------->
  // create function as generate random 10 numbers between 1 - 6
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }
  //----------------------------------------------------------------->
  // generate new die
  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }
  //----------------------------------------------------------------->
  // click button to generate new dice
  const rollDice = () => {
    if (!tenzies) {
      // is no wins game
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      // is wins game
      setTenzies(false);
      setDice(allNewDice());
    }
  };
  //----------------------------------------------------------------->
  // change isHeld property to true after click die item
  const heldDice = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };
  return (
    <main className='main'>
      {tenzies && <Confetti style={{ width: '100%', height: '100%' }} />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>
        Roll unit all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice-container'>
        {dice.map((die) => (
          <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            heldDice={() => heldDice(die.id)}
          />
        ))}
      </div>
      <button className='btn-primary' onClick={rollDice}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}

export default App;
