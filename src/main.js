const Board = require('./classes/Board.js');
const getConvertedArgs = require('./functions/getConvertedArgs.js');

(async () => {
	const board = new Board(getConvertedArgs());
	await board.start();
})();
