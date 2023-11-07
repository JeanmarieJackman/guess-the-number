import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Game from './pages/Game';
import HighScores from './pages/HighScores';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div
          className="background-container"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/numbers.png'})`,
          }}
        >
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/play" element={<Game />} />
              <Route path="/high-scores" element={<HighScores />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
