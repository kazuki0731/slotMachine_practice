import './App.css';
import SimpleContainer from './components/Container';
import { useState } from 'react';

const INITMS = 0;

function App() {
  const [ms, setMs] = useState(INITMS);
  const onClickStart = () => {
    setInterval(() => {
      setMs(prevState => prevState + 1);
    }, 10)
  }
  
  return (
    <div className="App">
      <SimpleContainer />
      <button onClick={onClickStart}>start</button>
      <p>{`${ms}`}</p>
    </div>
  );
}

export default App;
