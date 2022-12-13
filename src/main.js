const GameOfLife = require('./classes/GameOfLife.js');

const args = process.argv.slice(2);
const rows = Number(args[0]);
const cols = Number(args[1]);

(() => {
  const gameOfLife = new GameOfLife({ rows, cols });
  gameOfLife.start();
  return;
})();
