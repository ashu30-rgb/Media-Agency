import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

function RouteContent() {
  return (
    <Routes>
    <Route path="/" element= {<Home/>}/> 
    <Route path="/about" element= {<About/>}/> 
    <Route path="/services" element= {<Services/>}/> 
    <Route path="/portfolio" element= {<Portfolio/>}/> 
    <Route path="/contact" element= {<Contact/>}/> 
  </Routes>
  )
}

export default RouteContent