import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetails/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
        <Route exact path="/" element={<Shop />} ></Route>
        <Route path="/shop" element={<Shop />} ></Route>
        <Route path="/review" element={<Review />} ></Route>
        <Route path="/inventory" element={<Inventory />} ></Route>
        
        <Route path="/product/:productId" element={<ProductDetail />}></Route>  {/* : - colon ekta perameter; function er moto */}
        <Route path="*" element={<NotFound />}></Route>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
