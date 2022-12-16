const { describe, expect, it } = require('@jest/globals');
const Board = require('../src/classes/Board.js');
const getConvertedArgs = require('../src/functions/getConvertedArgs.js');

describe('Board', () => {
	it('should contain the corresponding data types', () => {
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
	it('should contain the correct number of cols', async () => {
		const board = new Board({ aliveChanceOnSpawn: 0.5, cols: 20, fps: 10, generations: 1, rows: 10 });
		await board.start({});
		expect(board.cells.length).toBe(board.cols);
	});
	it('should contain the correct number of rows', async () => {
		const board = new Board({ aliveChanceOnSpawn: 0.5, cols: 20, fps: 10, generations: 1, rows: 10 });
		await board.start({});
		for (let row of board.cells) {
			expect(row.length).toBe(board.rows);
		}
	});
});
