import React, { useState } from 'react';
import '../App.css';
import { useEffect } from 'react';

const Game = () => {
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [numberOfTries, setNumberOfTries] = useState(0);
  const [showHighScoresButton, setShowHighScoresButton] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleStartGame = (e) => {
    e.preventDefault();

    if (playerName.trim() === '') {
      alert('Please enter your name.');
    } else {
      setGameStarted(true);
    }
  };

  const handleGuess = (e) => {
    e.preventDefault();

    const guess = parseInt(userGuess, 10);
    setNumberOfTries(numberOfTries + 1);

    if (isNaN(guess)) {
      setMessage('Please enter a valid number.');
    } else if (guess < randomNumber) {
      setMessage('Try a higher number.');
    } else if (guess > randomNumber) {
      setMessage('Try a lower number.');
    } else {
      setMessage(
        `Congratulations, ${playerName}! The correct number was ${randomNumber}, and you guessed it in ${numberOfTries} tries.`
      );
      setShowHighScoresButton(true);
    }

    setUserGuess('');
  };

  useEffect(() => {
    async function sendWinInfoToDatabase() {
      try {
        if (message && message.startsWith('Congratulations')) {
          const response = await fetch('http://localhost:8080/api/game', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              playerName: playerName,
              attempts: numberOfTries,
              win: true,
              gameDate: new Date().toISOString(),
            }),
          });

          if (response.ok) {
            console.log('Win information sent to the database successfully');
          } else {
            console.error('Failed to send win information to the database');
          }
        }
      } catch (error) {
        console.error('An error occurred while sending win information to the database:', error);
      }
    }

    sendWinInfoToDatabase();
  }, [message, playerName, numberOfTries]);

  return (
    <div className="game-container">
      {!gameStarted ? (
        <form onSubmit={handleStartGame}>
          <h1>Guess the Number</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button type="submit">Start Game</button>
        </form>
      ) : (
        <div>
          {showHighScoresButton ? (
            <div>
              <p>
                Congratulations, {playerName}! The correct number was {randomNumber}, and you guessed it in{' '}
                {numberOfTries} tries.
              </p>
              <button onClick={() => setShowHighScoresButton(false)}>Play Again</button>
              <button onClick={() => console.log('View High Scores')}>View High Scores</button>
            </div>
          ) : (
            <div>
              <p>Hello, {playerName}! The game is in progress.</p>
              <form onSubmit={handleGuess}>
                <input
                  type="number"
                  placeholder="Enter your guess"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                />
                <button type="submit">Submit Guess</button>
              </form>
              {message && <p>{message}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
