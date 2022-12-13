const Board = require('./classes/Board.js');

const args = process.argv.slice(2);
const rows = Number(args[0]);
const cols = Number(args[1]);

(() => {
  const board = new Board({ rows, cols });
  board.start();
  return;
})();
