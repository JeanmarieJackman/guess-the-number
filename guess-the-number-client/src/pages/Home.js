import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const cardStyle = {
    width: '90%',
    height: 0,
    paddingBottom: '90%', // Set the height to be 90% of the width to keep it square
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2',
    position: 'relative', // Add position relative
  };

  const contentStyle = {
    position: 'absolute', // Add position absolute
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Center both horizontally and vertically
    width: '100%', // Ensure content spans the entire width
    textAlign: 'center', // Center text horizontally
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="row" style={{ width: '100%' }}>
        <div className="col-md-6">
          <div className="card rounded" style={cardStyle}>
            <div style={contentStyle}>
              <h1 className="card-title display-1">PLAY</h1>
              <h3 className="card-text text-center">Start a New Game</h3>
              <Link to="/play" className="btn btn-primary">
                Play Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card rounded" style={cardStyle}>
            <div style={contentStyle}>
              <h1 className="card-title display-1">HIGH SCORES</h1>
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
