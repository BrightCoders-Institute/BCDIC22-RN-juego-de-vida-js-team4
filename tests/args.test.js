const { expect, test } = require('@jest/globals');
const convertArgs = require('../src/functions/getConvertedArgs.js');

test('get and convert params to readble values', () => {
	expect(convertArgs()).toMatchObject({
		aliveChanceOnSpawn: 0.5,
		cols: 10,
		fps: 10,
		generations: Infinity,
		rows: 10,
	});
});