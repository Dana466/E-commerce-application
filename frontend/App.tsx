// src/App.tsx
import React from 'react';
import './App.css';
import Register from './pages/register.tsx';
import Login from './pages/login.tsx';
import { selectUsers } from './storeredux/userslice.ts';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PasswordReset from './pages/resetpassword.tsx';
import Profile from './pages/profile.tsx';
import HomePage from './pages/homepage.tsx';
import Cart from './pages/cart.tsx';
import Checkout from './pages/checkout.tsx';
import About from './pages/about.tsx';
import Contact from './pages/contact.tsx';
import DeleteAccount from './pages/deleteacc';
import { CartProvider } from './context/cartcontext.tsx'; // Import CartProvider

function App() {
  const user = useSelector(selectUsers);

  return (
    <CartProvider> {/* Wrap the app with CartProvider */}
      <BrowserRouter>
        <Routes>
          <>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forget-password' element={<PasswordReset />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
 <Route path='/deleteaccount' element={<DeleteAccount/>}/>

          </>
          <>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to="/login" />} />
          </>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
