import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './component/Home';
import About from './component/About';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Inter;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: red;
`;

const Counter = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Heading> 연습용 앱 </Heading>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
