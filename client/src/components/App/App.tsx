import { useState } from 'react';
import axios from 'axios';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import '../../App.css';

const { BACKEND_URL } = process.env;

function App() {
  const [count, setCount] = useState(0);

  // ? TEST
  const [response, setResponse] = useState(null);

  const handleTestingResponse = async () => {
    const { data } = await axios.get(BACKEND_URL ?? 'http://localhost:3001');
    console.log(data);
    setResponse(data.message);
  };
  // ?

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button type="button" onClick={handleTestingResponse}>
        Get Response
      </button>
      <p>RESPONSE: {response}</p>
    </>
  );
}

export default App;
