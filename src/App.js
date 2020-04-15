import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/footer/footer';
import Container from './components/container/container';
import { Link } from 'react-router-dom'


import './_assets/css/styles.css';

function App() {
  return (
    <div >
     <Link to="/" className="link"><Header /></Link> 
      <Container />
      <Footer />
    </div>
  );
}

export default App;
