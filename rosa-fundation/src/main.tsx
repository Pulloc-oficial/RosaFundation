import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ScrollProvider } from './components/page1/context/scrollContext.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </StrictMode>,
)

