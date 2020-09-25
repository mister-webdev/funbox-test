import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import './fonts/exo2-thin.otf'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
