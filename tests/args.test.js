const { describe, expect, it } = require('@jest/globals');
const getConvertedArgs = require('../src/functions/getConvertedArgs.js');

describe('Console args', () => {
	it('should convert them to the corresponding data types', () => {
		expect(getConvertedArgs()).toEqual(
			expect.objectContaining({
				aliveChanceOnSpawn: expect.any(Number),
				cols: expect.any(Number),
				fps: expect.any(Number),
				generations: expect.any(Number),
				rows: expect.any(Number),
			})
		);
	});
});
