import React, { useEffect } from 'react';
import './App.css';
import { ReactComponent as PiecesSvg } from './lib/media/chess_pieces.svg';



import * as parser from './lib/index.js';

const dark_color = '#7d7d96';
const white_color = '#ffffff';


function draw_board(canvas, svg ) {
  const square_size = 75;
  const x = 0; // padding
  const y = 0; // padding

  const ctx = canvas.getContext('2d');
  const state = parser.parse("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  console.log(svg);
  console.log('game state: ', state);

  for (let i = 0;  i < 8; i++) {
    for (let j = 0;  j < 8; j++) {
      ctx.fillStyle = ((i + j) % 2 === 0) ? white_color : dark_color;
      const offset_y = x + j * square_size;
      const offset_x = y + i * square_size;
      ctx.fillRect(offset_x, offset_y, square_size, square_size);
    }
  }

  ctx.strokeStyle = dark_color;
  ctx.strokeRect(x, y, square_size * 8, square_size * 8);

}


function App() {

  const canvas_ref = React.useRef(null);
  const svg_ref = React.useRef(null);

  useEffect(() => {
    draw_board(canvas_ref.current, svg_ref.current)
  }, [canvas_ref, svg_ref]);

  return (
    <div className="App">
      <div className="board-wrapper">
        <div className="board">
          <PiecesSvg ref={svg_ref} />
          <canvas {...{ ref: canvas_ref, id: 'canvas', width: 600, height: 600 }}/>
        </div>
      </div>
      

    </div>
  );
}

export default App;
