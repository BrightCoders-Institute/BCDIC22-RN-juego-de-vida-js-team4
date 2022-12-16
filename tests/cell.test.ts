import { describe, expect, it } from '@jest/globals';
import Cell from '../src/classes/Cell.js';

describe('Board', () => {
	it('should contain the corresponding data types', (): void => {
		const cell = new Cell({ aliveChanceOnSpawn: 0.5 });
		expect(cell).toEqual(
			expect.objectContaining({
				alive: expect.any(Boolean),
				neighbors: expect.any(Number),
			})
		);
	});
});
