// src/App.js
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth'; // Make sure the path is correct

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Changed component to element */}
          <Route path="/auth" element={<Auth />} /> {/* Changed component to element */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
