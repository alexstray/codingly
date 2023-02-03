import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, Post } from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Post />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
