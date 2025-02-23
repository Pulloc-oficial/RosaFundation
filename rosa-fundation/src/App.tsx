import { useState } from 'react'
import './index.css'
import Navbar from './components/page1/navbar';
import Navbar2 from './components/page2/navbar2';
import Page1 from './components/page1';
import Page2 from './components/page2';


function App() {
  const [isPage1, setIsPage1] = useState(true);
  return (
    <div
      className={`leading-normal tracking-normal text-white ${
        isPage1 ? "gradient" : "" // Aplica el gradiente solo en Page1
      }`}
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >
      {isPage1 ? <Navbar onSwitch={() => setIsPage1(false)} /> : <Navbar2 onSwitch={() => setIsPage1(true)} />}
      {isPage1 ? <Page1 /> : <Page2 />}
    </div>
  )
}

export default App
