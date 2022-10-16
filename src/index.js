import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Home from './Home';
import Search from './Search';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  </Router>
);
