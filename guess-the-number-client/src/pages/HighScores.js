import React, { useState, useEffect } from 'react';
import '../App.css';

const HighScores = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    async function fetchHighScores() {
      try {
        const response = await fetch('http://localhost:8080/api/game');
        if (response.ok) {
          const data = await response.json();
          console.log('Data from API:', data);
          setHighScores(data);
        } else {
          console.error('Failed to fetch high scores');
        }
      } catch (error) {
        console.error('An error occurred while fetching high scores:', error);
      }
    }

    fetchHighScores();
  }, []);

  return (
    <div className="high-scores-container">
      <h1>High Scores</h1>
      <div className="high-scores-table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Attempts</th>
              <th>Win or Lose</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {highScores.map((score) => (
              <tr key={score.id}>
                <td>{score.playerName}</td>
                <td>{score.attempts}</td>
                <td>{score.win ? 'Win' : 'Lose'}</td>
                <td>{new Date(score.gameDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighScores;
