import React from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

// Fade in body after JS mounts to avoid FOUC
if (typeof window !== 'undefined') {
  window.requestAnimationFrame(() => {
    document.body.classList.add('ready')
  })
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </BrowserRouter>
  </React.StrictMode>
)
