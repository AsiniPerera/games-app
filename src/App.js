import React from 'react';
import './App.css';
import GameCard from './GameCard';

function App() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title"> Sharpen Your Mind with Every Move!</h1>
      <div className="game-card-container">
        <GameCard
          image="https://www.logicagiochi.com/pub/media/catalog/product/cache/2d2d9615c573e2ac5808a5e4470da773/q/u/quixo_3.jpg"
          title="Tic Tac Toe"
          description="Play a strategic 5x5 grid match!"
          link="/tic-tac-toe"
          implemented
        />
        <GameCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAzFGVEEp4wUto3jTKBy5RByKpxSmxG2_mEPySY71ylEVoyQ8KZIUyDJa0VU-u4lVvXM&usqp=CAU"
          title="Traveling Salesman Problem"
          description="Find the shortest tour visiting each city once!"
          link="/tsp"
          implemented
        />
        <GameCard
          image="https://media.istockphoto.com/id/1408116973/photo/wooden-puzzle-tower-of-hanoi-with-color-rings-isolated-on-white-background-toy-for-kids.jpg?s=612x612&w=0&k=20&c=Sf_cazZ9Ts3VPWrNZR_DgkBjlzGJ0U79n93cQ8hN4sU="
          title="Tower of Hanoi"
          description="Solve the puzzle by moving disks wisely!"
          link="/hanoi"
          implemented
        />
        <GameCard
          image="https://m.media-amazon.com/images/I/81ftJTrnxeL.jpg"
          title="Eight Queens Puzzle"
          description="Place 8 queens without threatening each other!"
          link="/eight-queens"
          implemented
        />
        <GameCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjY0Fvy3B6kUbMxiVO8mIJZ3ZXaZyIGaO5w&s"
          title="Knight's Tour Problem"
          description="Make the knight visit every square exactly once!"
          link="/knights-tour"
          implemented
        />
      </div>
    </div>
  );
}

export default App;
