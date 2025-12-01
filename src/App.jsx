import { useState } from 'react'
import './App.css'

function App() {
  const [travelTitles, setTravelTitles] = useState([
    "Visitare Cartagine e i suoi monumenti",
    "Scoprire il punto più a nord del continente africano",
  ]);
  const [newTravelTitle, setNewTravelTitle] = useState('');

  function addTravelTitle(event) {
    event.preventDefault();
  }

  return (
    <>
      <main>
        <form onSubmit={}>
          <input type="text" value={newTravelTitle} onChange={(event) => {
            setNewTravelTitle(event.target.value)
          }} />
          <button type='submit'>send travel points</button>
        </form>
        <ul>
          {travelTitles.map((travelTitle, index) => {
            return (
              <li key={index}>{travelTitle}</li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default App
