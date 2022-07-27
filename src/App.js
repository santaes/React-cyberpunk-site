import React, { useState } from 'react';
import Contact from './components/Contact';
import Customers from './components/Customers';
import DevApi from './components/DevApi';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Products from './components/Products';

const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <div>
      <NavBar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <Products />
      <DevApi />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
