import { nanoid } from 'nanoid';
import { useState } from 'react';
import Die from './components/die/Die';

function App() {
  const [dice, setDice] = useState(allNewDice());
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
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
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
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll unit all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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
        Roll
      </button>
    </main>
  );
}

export default App;
