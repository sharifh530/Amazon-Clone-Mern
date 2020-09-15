import React from 'react';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <div className='grid-container'>
      <header className='header'>
        <div className='brand'>
          <button onClick={openMenu}>&#9776;</button>
          <a href='index.html'>amazona</a>
        </div>
        <div classNameName='header-links'>
          <a href='cart.html'>Cart</a>
          <a href='signin.html'>Signin</a>
        </div>
      </header>
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
      <main className='main'>
        <div className='content'>
          <ul className='products'>
            <li>
              <div className='product'>
                <img
                  src='/images/shirt1.jpg'
                  alt='product'
                  className='product-image'
                />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Nike</div>
                <div className='product-price'>$60</div>
                <div className='product-ratings'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img
                  src='/images/shirt1.jpg'
                  alt='product'
                  className='product-image'
                />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Nike</div>
                <div className='product-price'>$60</div>
                <div className='product-ratings'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img
                  src='/images/shirt1.jpg'
                  alt='product'
                  className='product-image'
                />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Nike</div>
                <div className='product-price'>$60</div>
                <div className='product-ratings'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img
                  src='/images/shirt1.jpg'
                  alt='product'
                  className='product-image'
                />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Nike</div>
                <div className='product-price'>$60</div>
                <div className='product-ratings'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img
                  src='/images/shirt1.jpg'
                  alt='product'
                  className='product-image'
                />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Nike</div>
                <div className='product-price'>$60</div>
                <div className='product-ratings'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img
                  src='/images/shirt1.jpg'
                  alt='product'
                  className='product-image'
                />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Nike</div>
                <div className='product-price'>$60</div>
                <div className='product-ratings'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className='footer'>All Right Reserved</footer>
    </div>
  );
}

export default App;
