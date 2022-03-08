import Die from './components/die/Die';

function App() {
  return (
    <main className='main'>
      <div className="dice-container">
      <Die  value='1'/>
      <Die  value='2'/>
      <Die  value='3'/>
      <Die  value='4'/>
      <Die  value='5'/>
      <Die  value='6'/>
      <Die  value='7'/>
      <Die  value='8'/>
      <Die  value='9'/>
      <Die  value='0'/>
      </div>
    </main>
  );
}

export default App;
