const Board = require('./classes/Board.js');
const getConvertedArgs = require('./functions/convertArgs.js');

const board = new Board(getConvertedArgs());
board.start();
