import { TonConnectButton } from '@tonconnect/ui-react'
import {useSendContract} from "./hooks/useLightSendContract"
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
      <button
      onClick={useSendContract}>
        SEND
      </button>
    </div>
    </>
  )
}

export default App
