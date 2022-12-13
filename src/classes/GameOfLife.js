module.exports = class GameOfLife {
  constructor({ rows, cols }) {
    this.rows = rows;
    this.cols = cols;
    this.generations = 5000;
    this.currentGeneration;
    this.nextGeneration;
  }

  createInitialGrid() {
    const grid = [];
    for (let row = 0; row < this.rows; row++) {
      let gridRows = [];
      for (let col = 0; col < this.cols; col++) {
        if (Math.floor(Math.random() * (7 - 0 + 1)) + 0 == 0) {
          gridRows.push(1);
        } else {
          gridRows.push(0);
        }
      }
      grid.push(gridRows);
    }
    return grid;
  }

  printGrid() {
    console.clear();
    let finalString = '';
    finalString += `Generation: ${this.generation}\n\r`;
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.currentGeneration[row][col] == 0) {
          finalString += '. ';
        } else {
          finalString += '* ';
        }
      }
      finalString += '\n\r';
    }
    console.log(finalString);
  }

  createNextGrid() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        let livingNeighbours = this.getLivingNeighbors({ row, col });
        if (livingNeighbours < 2 || livingNeighbours > 3) {
          this.nextGeneration[row][col] = 0;
        } else if (livingNeighbours == 3 && this.currentGeneration[row][col] == 0) {
          this.nextGeneration[row][col] = 1;
          a;
        } else {
          this.nextGeneration[row][col] = this.currentGeneration[row][col];
        }
      }
    }
  }

  getLivingNeighbors({ row, col }) {
    let life = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (!(i == 0 && j == 0)) {
          //life += grid[(row + i) % rows][(col + j) % cols];
          life += this.currentGeneration.at((row + i) % this.rows).at((col + j) % this.cols);
        }
      }
    }
    return life;
  }

  gridChanging() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (!(this.currentGeneration[row][col] == this.nextGeneration[row][col])) {
          return true;
        }
      }
    }
    return false;
  }

  // getIntegerValue({ prompt, low, high }) {
  //   let value;
  //   while (true) {
  //     try {
  //       value = Number(prompt);
  //     } catch (e) {
  //       console.log('Please enter a valid input number');
  //     }
  //     if (value < low || value > high) {
  //       console.log(`Input was not inside the bounds, please enter a number between ${low} and ${high}`);
  //     } else {
  //       break;
  //     }
  //   }
  //   return value;
  // }

  start() {
    console.log('Game of Life started');
    this.currentGeneration = this.createInitialGrid({ rows: this.rows, cols: this.cols });
    this.nextGeneration = this.createInitialGrid({ rows: this.rows, cols: this.cols });
    for (let generation = 1; generation <= this.generations; generation++) {
      if (
        !this.gridChanging({
          rows: this.rows,
          cols: this.cols,
          grid: this.currentGeneration,
          nextGrid: this.nextGeneration,
        })
      ) {
        break;
      }
      this.printGrid({ rows: this.rows, cols: this.cols, grid: this.currentGeneration, generation });
      this.createNextGrid({
        rows: this.rows,
        cols: this.cols,
        grid: this.currentGeneration,
        nextGrid: this.nextGeneration,
      });
      setTimeout(() => {
        this.currentGeneration = [this.nextGeneration, (this.nextGeneration = this.currentGeneration)][0];
        //[currentGeneration, nextGeneration] = [nextGeneration, currentGeneration];
      }, 1000);
    }
  }
};
