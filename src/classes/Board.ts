import Cell from './Cell.js';
import { IBoardConstructor, IBoardDraw, IBoardUpdateCells } from '../interfaces/Board.js';

export default class Board {
	public aliveChanceOnSpawn: number;
	public cols: number;
	public fps: number;
	public generations: number;
	public rows: number;
	constructor({ aliveChanceOnSpawn, cols, fps, generations, rows }: IBoardConstructor) {
		this.aliveChanceOnSpawn = aliveChanceOnSpawn || 0.5;
		this.cols = cols || 10;
		this.fps = fps || 10;
		this.generations = generations && generations > 0 ? Math.abs(generations) : Infinity;
		this.rows = rows || 10;
	}

	private draw({ cells, generation }: IBoardDraw): void {
		console.clear();
		console.log(
			`Table: ${this.cols}x${this.rows} | FPS: ${this.fps} | Living chance: ${this.aliveChanceOnSpawn * 100}%`
		);
		console.log(`Generation: ${generation}/${this.generations == Infinity ? '∞' : this.generations}`);
		for (let i = 0; i < this.cols + 2; i++) process.stdout.write('-');
		process.stdout.write('\n');
		for (let i = 0; i < this.rows; i++) {
			process.stdout.write('|');
			for (let j = 0; j < this.cols; j++) cells[j][i].draw();
			process.stdout.write('|\n');
		}
		for (let i = 0; i < this.cols + 2; i++) process.stdout.write('-');
		process.stdout.write('\n');
	}

	private updateCells({ cells }: IBoardUpdateCells): void {
		for (let i = 0; i < this.cols; i++) {
			for (let j = 0; j < this.rows; j++) {
				cells[i][j].neighbors = 0;
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
						if (cells[i + offsets[n][0]][j + offsets[n][1]].alive) cells[i][j].neighbors++;
						//cells[i][j].neighbors += Number(cells[i + offsets[n][0]][j + offsets[n][1]].alive);
					} catch (e) {}
				}
			}
		}
		for (let i = 0; i < this.cols; i++) {
			for (let j = 0; j < this.rows; j++) cells[i][j].sync();
		}
	}

	public async start(): Promise<void> {
		const cells = [];
		for (let i = 0; i < this.cols; i++) {
			const cellColumn = [];
			for (let j = 0; j < this.rows; j++) cellColumn.push(new Cell({ aliveChanceOnSpawn: this.aliveChanceOnSpawn }));
			cells.push(cellColumn);
		}
		for (let i = 0; i <= this.generations; i++) {
			const init = performance.now();
			this.draw({ cells, generation: i });
			this.updateCells({ cells });
			const sleepTime = 1000 / this.fps - (performance.now() - init);
			await new Promise((r) => setTimeout(r, sleepTime > 0 ? sleepTime : 0));
		}
	}
}
