import { describe, expect, it } from '@jest/globals';
import Board from '../src/classes/Board.js';
import getConvertedArgs from '../src/functions/getConvertedArgs.js';

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
});
