import React from 'react'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

import Reset from './pages/auth/Reset'
import Products from './components/products/Products'
import Product from './components/product/Product'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'
import './index.css'


function App(props) {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/contact' element={ <Contact/>}/>
       <Route path='/login' element={ <Login/>}/>
       <Route path='/contact' element={ <Contact/>}/>
       
       <Route path='/register' element={ <Register/>}/>
       
       <Route path='/reset' element={ <Reset/>}/>
       <Route path='/products' element={ <Products/>}/>
       <Route path='/products/:id' element={ <Product/>}/>
       <Route path='/cart' element={ <Cart/>}/>
       <Route path='/checkout' element={ <Checkout/>}/>
       
       
     </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;