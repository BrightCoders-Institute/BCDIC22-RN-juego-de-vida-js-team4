module.exports = class GameOfLife {
  constructor({ rows, cols }) {
    this.rows = rows;
    this.cols = cols;
  }
  start() {
    console.log('Game of Life started');
  }
};
