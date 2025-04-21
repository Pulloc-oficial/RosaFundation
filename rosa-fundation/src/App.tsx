import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Navbar from './components/page1/navbar';
import Page1 from './components/page1';
import Footer from './components/page1/home/footer';
import Preguntas from './components/page1/pages/preguntas';
import Instalaciones from './components/page1/pages/instalaciones';
import Servicios from './components/page1/pages/servicios';
import Nosotros from './components/page1/pages/nosotros';


function App() {
  return (
    <Router>
      <div className="leading-normal tracking-normal text-white gradient">
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/instalacion" element={<Instalaciones />} />
          <Route path="/preguntas" element={<Preguntas />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
