import React, {useState} from 'react';
import {TonConnectButton} from '@tonconnect/ui-react'
import {useSendContract} from "./hooks/useLightSendContract"
import './App.css'
import '@twa-dev/sdk'
import {useTonConnect} from "./hooks/useTonConnect.ts";
import {CHAIN} from "@tonconnect/protocol";

function App() {
  const { network } = useTonConnect();

  // Wallet to wallet testing
  const [amountSend, setAmountSend] = useState(1)

  // Three side contract testing
  const [amountOut, setAmountOut] = useState(0.01);
  const [amountIn, setAmountIn] = useState(0.01);
  const [currencyOut, setCurrencyOut] = useState("");
  const [currencyIn, setCurrencyIn] = useState("");

  // Call Functions
  const {sendTon} = useSendContract({amountSend});

  // Local Handlers
  const writeData = () => {
    console.log(amountOut, amountIn, currencyOut, currencyIn);
  }

  const readData = () => {
    console.log("read from DB");
  }

  // Main App

  return (
      <>
        <div className='Application'>
          <div className='Header'>
            <TonConnectButton/>
            <p> Net is {network ? network === CHAIN.MAINNET ? "MAINnet" : "TESTnet" : "N/A"}</p>
          </div>

          <div className='SendLightContract'>
            <div>
              <input
                  type='text'
                  value={amountSend}
                  onChange={(e) => setAmountSend(Number(e.target.value))}/>
            </div>
            <button onClick={sendTon}>
              SEND Ton in {network ? network === CHAIN.MAINNET ? "MAINnet" : "TESTnet" : "N/A"}
            </button>
          </div>

          <div className='Label'>
            <img src=''/>
            <h1> OURO </h1>
          </div>

          <div className='Main'>
            <div className='InputFrom'>
              <p>Ton Out</p>
              <input
                  type="int"
                  value={amountOut}
                  onChange={event => setAmountOut(Number(event.target.value))}
              />
              <p>Currency Out</p>
              <input
                  type="int"
                  value={currencyOut}
                  onChange={event => setCurrencyOut(event.target.value)}
              />
              <p>Ton In</p>
              <input
                  type="int"
                  value={amountIn}
                  onChange={event => setAmountIn(Number(event.target.value))}
              />
              <p>Currency In</p>
              <input
                  type="int"
                  value={currencyIn}
                  onChange={event => setCurrencyIn(event.target.value)}
              />
            </div>

            <button
                onClick={writeData}>
              Create Offer
            </button>
          </div>

          <div>
            <button
                onClick={readData}>
              Swap
            </button>
          </div>

          <div className='Footer'>
            <p>Developed by Anon's members</p>
          </div>
        </div>
      </>
  )
}

export default App
