import React, {useState} from 'react';
import {TonConnectButton, useTonAddress} from '@tonconnect/ui-react'
import {useSendContract} from "./hooks/useLightSendContract"
import {useTonConnect} from "./hooks/useTonConnect.ts";
import {CHAIN} from "@tonconnect/protocol";
import {useCreateOffer} from "./hooks/useCreateOffer.ts";
import {useSwap} from "./hooks/useSwap.ts"
import {useClaim} from "./hooks/useClaim.ts"
import './App.css'
import '@twa-dev/sdk'

function App() {
  const { network } = useTonConnect();

  // Wallet to wallet testing
  const [amountSend, setAmountSend] = useState(1)

  // Three side contract testing
  const offerId = 1

  const [amountOut, setAmountOut] = useState(1);
  const [amountIn, setAmountIn] = useState(1);
  const [currencyOut, setCurrencyOut] = useState("TON");
  const [currencyIn, setCurrencyIn] = useState("TON");

  const [offerStatus, setOfferStatus] = useState("not created");


  // Call Functions from contracts
  const {sendTon} = useSendContract({amountSend});
  const {createOffer} = useCreateOffer({offerId, amountOut, currencyOut, amountIn, currencyIn});
  const {swap} = useSwap({offerId, amountIn})
  const {claim} = useClaim({offerId})

  // Local Handlers
  const createOfferHandler = () =>{
    console.log(amountOut, amountIn)
    createOffer()
    setOfferStatus("created")
  }

  const swapHandler = () =>{
    console.log("swap")
    swap()
    console.log("swap success")
  }

  const claimHandler = () =>{
    console.log("claim")
    claim()
    console.log("claim success")
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
              <p>Status offer {offerStatus}</p>
            </div>

            <button
                onClick={createOfferHandler}>
              Create Offer
            </button>
          </div>

          <div>
            <p></p>
            <button
                onClick={swapHandler}>
              Swap
            </button>
          </div>

          <div>
            <p></p>
            <button
            onClick={claimHandler}>
              Claim
            </button>
          </div>

          <div className='Footer'>
            <p> _________________________ </p>
            <p>Developed by Anon's members</p>
          </div>
        </div>
      </>
  )
}

export default App
