import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './components/styles/GlobalStyles.js'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>
)
