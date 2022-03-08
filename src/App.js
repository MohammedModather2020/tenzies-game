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
      newDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return newDice;
  }
  //----------------------------------------------------------------->
  function rollDice() {
    setDice(allNewDice());
  }
  return (
    <main className='main'>
      <div className='dice-container'>
        {dice.map((die) => (
          <Die key={die.id} value={die.value} />
        ))}
      </div>
      <button className='btn-primary' onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
