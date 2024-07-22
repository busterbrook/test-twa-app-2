import { useState } from 'react'
import './App.css'
import '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  function handleClickInc(){
    console.log("click")
    setCount(count + 1)
  }

  return (
    <>
    <div>
      <h1> Test APP </h1>
    </div>
    <div>
      <button
        onClick={handleClickInc}>
        SEND {count}
      </button>
    </div>
    </>
  )
}

export default App
