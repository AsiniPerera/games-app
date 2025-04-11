
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TicTacToe from './components/TicTacToe'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        {/* You can add more routes for TSP, Hanoi, etc. */}
      </Routes>
    </Router>
  );
}

export default App;

