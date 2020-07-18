import React from 'react';
import './App.scss';
import * as FEN from './lib/index.js';

const fens = [
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
  'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2',
  'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2'
];

function renderBoard(ranks) {
  return ranks.map((rank, i) => rank.split('').map((piece, j) => {
    const className = [
      'square',
      ((i + j) % 2 === 0) ? 'light' : 'dark',
      piece !== '-' && (piece + ' piece') || ''
    ].join(' ');

    return <Square {...{ className }}/>
  }));
}


function App() {

  const state = FEN.parse(fens[0]);

  return (
    <div className="App">
      <div className="board-wrapper">
        <div className="board">
          {renderBoard(state.ranks)}
        </div>
      </div>
    </div>
  );
}

function Square({ className }) {
  return (
    <div className={className}></div>
  );
}

export default App;
