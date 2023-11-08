import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the external CSS file

const Home = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-6">
          <div className="card rounded card-container">
            <div className="card-content">
            <h1 className="card-title display-1 text-success">PLAY</h1>
              <h3 className="card-text text-center">Start a New Game</h3>
              <Link to="/play" className="btn btn-primary">
                Play Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card rounded card-container">
            <div className="card-content">
              <h1 className="card-title display-1 text-success">HIGH SCORES</h1>
              <h3 className="card-text text-center">View the Top Scores</h3>
              <Link to="/high-scores" className="btn btn-primary">
                View Scores
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
