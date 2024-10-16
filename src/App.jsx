import {useState} from "react"
import StartGame from './components/StartGame.jsx'
import Gameplay from './components/Gameplay.jsx'
import  './App.css'

function App() {
  const[isgamestart, setIsgamestart]=useState(false)
  const togglegameplay =()=> {
    setIsgamestart((prev)=>!prev);
  };
  return (
    <>
    { isgamestart ? <Gameplay/> : <StartGame toggle={togglegameplay}/>}
      
    </>
  )
}

export default App
