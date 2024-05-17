import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contect from './Contect';
import Error from './Error';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route exact path='/' Component={Home}/>
    <Route path='/about' Component={About}/>
    <Route path='/service' Component={Service}/>
    <Route path='/contect' Component={Contect}/>
    <Route path='*' Component={Error} /> 
   </Routes>
    <Footer/>
   </>
  );
}

export default App;
