import { TonConnectButton } from '@tonconnect/ui-react'
import './App.css'
import '@twa-dev/sdk'

function App() {
  return (
    <>
    <div>
      <TonConnectButton/>
    </div>
    <div>
      <h1> Test APP </h1>
      <p> Sync You </p>
    </div>
    <div>
      <button>
        SEND
      </button>
    </div>
    </>
  )
}

export default App
