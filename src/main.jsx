import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import nav from './assets/nav'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div id="main">
    <nav></nav>
   </div>
  </StrictMode>,
)
