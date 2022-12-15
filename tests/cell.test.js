const { describe, expect, it } = require('@jest/globals');
const Cell = require('../src/classes/Cell.js');

describe('Board', () => {
	it('should contain the corresponding data types', () => {
		const cell = new Cell({ aliveChanceOnSpawn: 0.5 });
		expect(cell).toEqual(
			expect.objectContaining({
				alive: expect.any(Boolean),
				neighbors: expect.any(Number),
			})
		);
	});
});
