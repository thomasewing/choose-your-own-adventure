import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ForceNextLevel from './components/ForceNextLevel';
import Death from './components/Death';
import LookAround from './components/LookAround'
import PickUpSword from './components/PickUpSword.jsx'


function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/forceNextLevel" element={<ForceNextLevel />}/>
      <Route path="/death" element={<Death />}/>
      <Route path ="/pickupsword" element={<PickUpSword/>}/>
      <Route path ="/look" element={<LookAround/>}/>
      <Route path ="/look" element={<LookAround/>}/>
      <Route path ="/look" element={<LookAround/>}/>

    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
