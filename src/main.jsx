import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Header from './components/custom/Header';
import App from './App.jsx'
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Toaster/>
  </StrictMode>,
)
