import Cell from '../classes/Cell';

export interface IBoardConstructor {
	aliveChanceOnSpawn?: number;
	cols?: number;
	fps?: number;
	generations?: number;
	rows?: number;
}

export interface IBoardDraw {
	cells: Cell[][];
	generation: number;
}

export interface IBoardUpdateCells {
	cells: Cell[][];
}
