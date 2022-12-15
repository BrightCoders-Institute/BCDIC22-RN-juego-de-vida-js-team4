import Cell from './Cell.js';
import { IBoardConstructor, IBoardDraw } from '../interfaces/Board.js';

export default class Board {
	public aliveChanceOnSpawn: number;
	public cells: Cell[][];
	public cols: number;
	public fps: number;
	public generations: number;
	public rows: number;

	constructor({ aliveChanceOnSpawn, cols, fps, generations, rows }: IBoardConstructor) {
		this.aliveChanceOnSpawn = aliveChanceOnSpawn;
		this.cells = [];
		this.cols = cols;
		this.fps = fps;
		this.generations = generations;
		this.rows = rows;
	}

	private draw({ generation }: IBoardDraw): void {
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

	private updateCells(): void {
		for (let i = 0; i < this.cols; i++) {
			for (let j = 0; j < this.rows; j++) {
				this.cells[i][j].neighbors = 0;
				const offsets = [
					[1, 0],
					[1, 1],
					[1, -1],
					[0, 1],
					[0, -1],
					[-1, 0],
					[-1, 1],
					[-1, -1],
				];
				for (const n in offsets) {
					try {
						if (this.cells[i + offsets[n][0]][j + offsets[n][1]].alive) this.cells[i][j].neighbors++;
						//cells[i][j].neighbors += Number(cells[i + offsets[n][0]][j + offsets[n][1]].alive);
					} catch (e) {}
				}
			}
		}
		for (let i = 0; i < this.cols; i++) {
			for (let j = 0; j < this.rows; j++) this.cells[i][j].sync();
		}
	}

	public async start(): Promise<Cell[][]> {
		for (let i = 0; i < this.cols; i++) {
			const cellColumn = [];
			for (let j = 0; j < this.rows; j++) cellColumn.push(new Cell({ aliveChanceOnSpawn: this.aliveChanceOnSpawn }));
			this.cells.push(cellColumn);
		}
		for (let i = 0; i <= this.generations; i++) {
			const init = performance.now();
			this.draw({ generation: i });
			this.updateCells();
			const sleepTime = 1000 / this.fps - (performance.now() - init);
			await new Promise((r) => setTimeout(r, sleepTime > 0 ? sleepTime : 0));
		}
		return this.cells;
	}
}
