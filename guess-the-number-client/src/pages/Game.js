import React, { useState } from 'react';
import '../App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [numberOfTries, setNumberOfTries] = useState(0);
  const [showHighScoresButton, setShowHighScoresButton] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const maxGuesses = 10;
  const navigate = useNavigate();

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

    if (!gameStarted) {
      alert('Please start the game first.');
      return;
    }

    const guess = parseInt(userGuess, 10);
    setNumberOfTries(numberOfTries + 1);

    if (isNaN(guess)) {
      setMessage('Please enter a valid number.');
    } else if (guess < randomNumber) {
      setMessage('Try a higher number.');
    } else if (guess > randomNumber) {
      setMessage('Try a lower number.');
    } else {
      if (numberOfTries < maxGuesses) {
        setMessage(
          `Congratulations, ${playerName}! The correct number was ${randomNumber}, and you guessed it in ${numberOfTries} tries.`
        );
        setShowHighScoresButton(true);
        setGameOver(true);
        sendGameResultToDatabase(true, numberOfTries);
      } else {
        setMessage(`Sorry, ${playerName}! You've reached the maximum number of ${maxGuesses} tries.`);
        setShowHighScoresButton(true);
        setGameOver(true);
        sendGameResultToDatabase(false, numberOfTries);
      }
    }

    setUserGuess('');

    if (numberOfTries >= maxGuesses) {
      setMessage(`Sorry, ${playerName}! You've reached the maximum number of ${maxGuesses} tries.`);
      setShowHighScoresButton(true);
      setGameOver(true);
      sendGameResultToDatabase(false, numberOfTries);
    }
  };

  const sendGameResultToDatabase = async (win, attempts) => {
    try {
      const response = await fetch('http://localhost:8080/api/game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playerName: playerName,
          attempts: attempts,
          win: win,
          gameDate: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        console.log('Game result sent to the database successfully');
      } else {
        console.error('Failed to send game result to the database');
      }
    } catch (error) {
      console.error('An error occurred while sending game result to the database:', error);
    }
  };

  const handleViewHighScores = () => {
    navigate('/high-scores');
  };

  const handlePlayAgain = () => {
    setGameStarted(false);
    setNumberOfTries(0);
    setGameOver(false);
    setRandomNumber(generateRandomNumber());
    setShowHighScoresButton(false);
  };

  return (
<div className="game-container">
  {!gameStarted ? (
    <form onSubmit={handleStartGame} className="text-center">
      <h1 className="card-title display-1 text-success">GUESS THE NUMBER</h1>
      <p>Choose a number between 1 and 100. If you guess in less than 10 attempts, you win!</p>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="form-control"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Start Game
          </button>
        </div>
      </div>
    </form>
  ) : (
        <div>
          {showHighScoresButton ? (
            <div>
              <p className="card-text">{message}</p>
              {gameOver ? (
                <div>
                  <button onClick={handlePlayAgain} className="btn btn-primary">
                    Play Again
                  </button>
                  <button onClick={handleViewHighScores} className="btn btn-primary">
                    View High Scores
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <div>
              <p className="card-text">Hello, {playerName}! The game is in progress.</p>
              <form onSubmit={handleGuess}>
                <input
                  type="number"
                  placeholder="Enter your guess"
                  value={userGuess}
                  onChange={(e) => setUserGuess(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Submit Guess
                </button>
              </form>
              {message && <p className="card-text">{message}</p>}
              <p className="card-text">Guesses made: {numberOfTries} out of {maxGuesses}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;

