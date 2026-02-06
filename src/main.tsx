import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

// ! se le conoce como Assertion not null non null assertion operator

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
