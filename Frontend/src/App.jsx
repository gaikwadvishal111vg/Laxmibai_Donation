import React from 'react'  
import "./App.css";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Donate from './components/Donate';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
const App = () => {
  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <ToastContainer position="top-right"/>
  </Router>
  </>
  )
}

export default App