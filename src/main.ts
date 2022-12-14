import Board from './classes/Board.js';

const args: string[] = process.argv.slice(2);
const rows = Number(args[0]);
const cols = Number(args[1]);
const generations = Number(args[2]);
const fps = Number(args[3]);
const aliveChanceOnSpawn = Number(args[4]);

const board: Board = new Board({ cols, generations, fps, rows, aliveChanceOnSpawn });
board.start();