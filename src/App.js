import React from 'react';
import './App.css';
import About from './Components/About/About';
import Card from './Components/Card/Card';
import Carousels from './Components/Carousel/Carousel';
import Documents from './Components/Document/Document';
import Footers from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Carousels />
      <Card />
      <Documents />
      <About />
      <Footers />
    </React.Fragment>
  );
}

export default App;
