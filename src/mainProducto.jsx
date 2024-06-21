import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './appProducto.jsx'
import './css/ProductStile.css'
import './css/Pie_pgn.css'
import './css/Header.css'
import './css/RegLog.css'
import './css/cardProduc.css'
import './css/styleMenu.css'
import './css/comprasCar.css'


const prodc = ReactDOM.createRoot(document.getElementById('prodc'));
prodc.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
