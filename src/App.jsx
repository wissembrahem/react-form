import { useState } from 'react'
import './App.css'

function App() {
const [travelTitle, setTravelTitle] = useState("Road trip");
  return (
    <>
    <h1>{travelTitle}</h1>
    <input type="text" value={travelTitle}/>
    </>
  )
}

export default App
