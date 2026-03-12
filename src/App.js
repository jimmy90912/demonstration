

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Service1 from './pages/Service1';
import Renovation from './pages/Renovation';
import Header from './component/Header';
import Footer from './component/Footer'
import React from 'react';
import Contact from './pages/Contact';
import Explore from './pages/Explore';
import Import from './pages/Import';
// this is the main body of the app.
function App() {
  return (
    <Router>
      <div>
      <header id='header'>
        <Header/>
      </header>
      <div id= 'page-content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service1" element={<Service1/>} />
          <Route path="/Renovation" element={<Renovation/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Explore" element={<Explore/>} />
          <Route path="/Import" element={<Import/>} />
        </Routes>
      
        <footer>
          <Footer/>
        </footer>
      </div>
      </div>
    </Router>
    

  );
}

export default App;
