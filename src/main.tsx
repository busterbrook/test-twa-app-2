import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TonConnectUIProvider} from '@tonconnect/ui-react'

const manifesstUrl = "https://busterbrook.github.io/test-twa-app-2/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifesstUrl}>
    <React.StrictMode>
        <App />  
    </React.StrictMode>
  </TonConnectUIProvider>
)
