
import './App.css';
import Parent from './Component/Parent/Parent';
import {useState, createContext} from 'react';

export const Context = createContext();


function App() {

  const [counter, setCounter] = useState(0);


  return (

    <Context.Provider value={{counter, setCounter}}>

      <div>
        <Parent/>
        <p>{counter}</p>
      </div>

    </Context.Provider>
  );
}

export default App;
