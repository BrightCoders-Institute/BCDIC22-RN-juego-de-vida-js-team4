import { ICellConstructor } from '../interfaces/Cell.js';

export default class Cell {
	public alive: boolean;
	public neighbors: number;

	constructor({ aliveChanceOnSpawn }: ICellConstructor) {
		this.alive = Math.random() < aliveChanceOnSpawn;
		this.neighbors = 0;
	}

	public draw(): void {
		process.stdout.write(this.alive ? '*' : '.');
	}

	public sync(): void {
		if (this.neighbors == 3) this.alive = true;
		else if (this.neighbors < 2 || this.neighbors > 3) this.alive = false;
	}
}
