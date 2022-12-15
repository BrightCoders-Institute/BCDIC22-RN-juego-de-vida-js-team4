const Cell = require('./Cell.js');

module.exports = class Board {
	constructor({ aliveChanceOnSpawn, cols, fps, generations, rows }) {
		this.aliveChanceOnSpawn = aliveChanceOnSpawn;
		this.cells = [];
		this.cols = cols;
		this.fps = fps;
		this.generations = generations;
		this.rows = rows;
	}

	draw({ generation }) {
		console.clear();
		console.log(
			`Table: ${this.cols}x${this.rows} | FPS: ${this.fps} | Living chance: ${this.aliveChanceOnSpawn * 100}%`
		);
		console.log(`Generation: ${generation}/${this.generations == Infinity ? '∞' : this.generations}`);
		for (let i = 0; i < this.cols + 2; i++) process.stdout.write('-');
		process.stdout.write('\n');
		for (let i = 0; i < this.rows; i++) {
			process.stdout.write('|');
			for (let j = 0; j < this.cols; j++) this.cells[j][i].draw();
			process.stdout.write('|\n');
		}
		for (let i = 0; i < this.cols + 2; i++) process.stdout.write('-');
		process.stdout.write('\n');
	}

	updateCells() {
		for (let i = 0; i < this.cols; i++) {
			for (let j = 0; j < this.rows; j++) {
				this.cells[i][j].neighbors = 0;
				let offsets = [
					[1, 0],
					[1, 1],
					[1, -1],
					[0, 1],
					[0, -1],
					[-1, 0],
					[-1, 1],
					[-1, -1],
				];
				for (let n in offsets) {
					try {
						this.cells[i][j].neighbors += this.cells[i + offsets[n][0]][j + offsets[n][1]].alive;
					} catch (e) {}
				}
			}
		}
		for (let i = 0; i < this.cols; i++) {
			for (let j = 0; j < this.rows; j++) this.cells[i][j].sync();
		}
	}

	async start() {
		for (let i = 0; i < this.cols; i++) {
			let cellColumn = [];
			for (let j = 0; j < this.rows; j++) cellColumn.push(new Cell({ aliveChanceOnSpawn: this.aliveChanceOnSpawn }));
			this.cells.push(cellColumn);
		}
		for (let i = 0; i <= this.generations; i++) {
			let init = performance.now();
			this.draw({ generation: i });
			this.updateCells();
			let sleepTime = 1000 / this.fps - (performance.now() - init);
			await new Promise((r) => setTimeout(r, sleepTime > 0 ? sleepTime : 0));
		}
		return this.cells;
	}
};
