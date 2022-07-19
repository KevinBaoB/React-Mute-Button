import { useState } from 'react'
import soundOff from './icons/off.svg'
import soundOn from './icons/on.svg'
import './App.css'

function App() {
  const [sound, setSound] = useState(soundOn)

  const clickHandler = () => {
    if (sound === soundOn) {
      setSound(soundOff)
    } 
    else {
      setSound(soundOn)
    }

  }

  return (
    <div className="App">
       <a onClick={clickHandler}><img src={sound} className="sound" alt="Sound Button" /></a>
    </div>
  )
}

export default App
