import { Routes, Route } from 'react-router-dom';
import { Home, About, Courses, Teachers, Contact, NotFound } from './src/Pages'
import './App.css'

function App() {
  // const location = useLocation();
  // const hidePath = ['/']

  return (
    <div className='app' >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  )
}

export default App;
