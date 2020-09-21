import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductArea from './components/ProductArea/ProductArea';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <Header />
        <aside className='sidebar'>
          <h3>Shoping Catagories</h3>
          <button className='sidebar-close-button' onClick={closeMenu}>
            x
          </button>
          <ul>
            <li className='catagories'>
              <a href='index.html'>Pants</a>
              <a href='index.html'>Shirts</a>
            </li>
          </ul>
        </aside>
        {/* <ProductDetails /> */}
        <Route path='/product/:id' component={ProductDetails} />
        <Route path='/' exact={true} component={ProductArea} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
