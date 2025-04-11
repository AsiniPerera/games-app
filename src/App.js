import React from 'react';
import './App.css';
import GameCard from './GameCard';

function App() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">🎮 Game Dashboard</h1>
      <div className="game-card-container">
        <GameCard
          image="/images/tic-tac-toe.png"
          title="Tic Tac Toe"
          description="Play a strategic 5x5 grid match!"
          link="/tic-tac-toe"
          implemented
        />
        <GameCard
          image="/images/snake-game.png"
          title="Snake Game"
          description="Classic snake, eat & grow!"
        />
        <GameCard
          image="/images/sudoku.png"
          title="Sudoku"
          description="Challenge your logic and numbers!"
        />
        <GameCard
          image="/images/memory-game.png"
          title="Memory Game"
          description="Train your memory with cards!"
        />
        <GameCard
          image="/images/hangman.png"
          title="Hangman"
          description="Guess the word before you’re hanged!"
        />
      </div>
    </div>
  );
}

export default App;
