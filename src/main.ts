import Board from './classes/Board.js';
import getConvertedArgs from './functions/getConvertedArgs.js';

(async () => {
	const board: Board = new Board(getConvertedArgs());
	await board.start();
})();
