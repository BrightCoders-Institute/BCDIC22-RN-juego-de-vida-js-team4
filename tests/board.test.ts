import { describe, expect, it } from '@jest/globals';
import Board from '../src/classes/Board.js';
import getConvertedArgs from '../src/functions/getConvertedArgs.js';

describe('Board', () => {
	it('should contain the corresponding data types', (): void => {
		const board = new Board(getConvertedArgs());
		expect(board).toEqual(
			expect.objectContaining({
				aliveChanceOnSpawn: expect.any(Number),
				cells: expect.any(Array),
				cols: expect.any(Number),
				fps: expect.any(Number),
				generations: expect.any(Number),
				rows: expect.any(Number),
			})
		);
	});
	it('should contain the correct number of cols', async (): Promise<void> => {
		const board = new Board({ aliveChanceOnSpawn: 0.5, cols: 20, fps: 10, generations: 1, rows: 10 });
		await board.start();
		expect(board.cells.length).toBe(board.cols);
	});
	it('should contain the correct number of rows', async (): Promise<void> => {
		const board = new Board({ aliveChanceOnSpawn: 0.5, cols: 20, fps: 10, generations: 1, rows: 10 });
		await board.start();
		for (let row of board.cells) {
			expect(row.length).toBe(board.rows);
		}
	});
});
