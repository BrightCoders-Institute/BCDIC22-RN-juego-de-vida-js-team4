export interface IBoardConstructor {
	aliveChanceOnSpawn: number;
	cols: number;
	fps: number;
	generations: number;
	rows: number;
}

export interface IBoardDraw {
	generation: number;
}
