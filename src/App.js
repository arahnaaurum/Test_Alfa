import './App.css';
import React, { useEffect } from 'react';
import { Cards } from './components/Cards';
import { useDispatch } from "react-redux";
import { setCards } from "./store/cards/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://www.fishwatch.gov/api/species`)
      .then(response => response.json())
      .then((result) => {
        // сократила кол-во результатов для удобства работы;
        result = result.slice(0, 15);
        dispatch(setCards(result));
      });
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Cards />
      </header>
    </div>
  );
}

export default App;
