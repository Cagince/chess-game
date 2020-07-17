import React, { useEffect } from 'react';
import './App.css';


import * as parser from './lib/index.js';



function draw_board(canvas) {
  const square_size = 75;
  const x = 0; // padding
  const y = 0; // padding

  const ctx = canvas.getContext('2d');

  for (let i = 0;  i < 8; i++) {
    for (let j = 0;  j < 8; j++) {
      ctx.fillStyle = ((i + j) % 2 === 0) ? 'white' : 'black';
      const offset_y = x + j * square_size;
      const offset_x = y + i * square_size;
      ctx.fillRect(offset_x, offset_y, square_size, square_size);
    }
  }

  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, square_size * 8, square_size * 8);
  const state = parser.parse("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  console.log('game state: ', state);

}


function App() {

  const canvas_ref = React.useRef(null);

  useEffect(() => {
    draw_board(canvas_ref.current)
  }, [canvas_ref]);

  return (
    <div className="App">
      <div className="board-wrapper">
        <div className="board">
          <canvas {...{ ref: canvas_ref, id: 'canvas', width: 600, height: 600 }}/>
        </div>
      </div>
      

    </div>
  );
}

export default App;
