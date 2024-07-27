import React from 'react';
import {useState} from "react";
import { TonConnectButton } from '@tonconnect/ui-react'
import {useSendContract} from "./hooks/useLightSendContract"
import './App.css'
import '@twa-dev/sdk'
import react from "@vitejs/plugin-react";

function App() {
  const [amountOut] = useState("0");
  const [amountIn] = useState("0");
  const [currencyOut] = useState("");
  const [currencyIn] = useState("");

  const {sendTon} = useSendContract();

  const writeData = () => {
    console.log(amountOut, amountIn, currencyOut, currencyIn);
  }

  const readData = () => {
    console.log("read from DB");
  }

  return (
      <>
        <div className='Application'>
          <div className='Header'>
            <TonConnectButton/>
            <button onClick={sendTon}>
              SEND 1 TON
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
                  //onChange={onChange}
              />
              <p>Currency Out</p>
              <input
                  type="int"
                  value={amountOut}
                  //onChange={onChange}
              />
              <p>Ton In</p>
              <input
                  type="int"
                  value={amountOut}
                  //onChange={onChange}
              />
              <p>Currency In</p>
              <input
                  type="int"
                  value={amountOut}
                  //onChange={onChange}
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
