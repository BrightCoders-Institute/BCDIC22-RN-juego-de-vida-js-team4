const Cell = require('./Cell.js');

module.exports = class Board {
    constructor({ rows, cols, aliveChanceOnSpawn, fps}) {
        this.rows = rows || 10;
        this.cols = cols || 30;
        this.aliveChanceOnSpawn = aliveChanceOnSpawn || .2;
        this.fps = fps || 5.0;
    }
    draw(cells) {
        console.clear()
        for (let i = 0; i < this.cols + 2; i++) process.stdout.write('-');
        process.stdout.write('\n');
        for (let y = 0; y < this.rows; y++) {
            process.stdout.write('|');
            for (let x = 0; x < this.cols; x++) cells[x][y].draw();
            process.stdout.write('|\n');
        }
        for (let i = 0; i < this.cols + 2; i++) process.stdout.write('-');
    }
    
    updateCells(cells) {
        for (let x = 0; x < this.cols; x++) {
            for (let y = 0; y < this.rows; y++) {
                cells[x][y].neighbors = 0;
                let offsets = [[1, 0], [1, 1], [1, -1], [0, 1], [0, -1], [-1, 0], [-1, 1], [-1, -1]];
                for (let i in offsets) {
                    try { cells[x][y].neighbors += cells[x + offsets[i][0]][y + offsets[i][1]].alive; }
                    catch (e) {}
                }
            }
        }
        for (let x = 0; x < this.cols; x++) {
            for (let y = 0; y < this.rows; y++) cells[x][y].sync();
        }
    }
    
    async start() {
        let cells = [];
        for (let x = 0; x < this.cols; x++) {
            let cellColumn = [];
            for (let y = 0; y < this.rows; y++) cellColumn.push(new Cell({aliveChanceOnSpawn: this.aliveChanceOnSpawn}));
            cells.push(cellColumn);
        }
    
        while (true) {
            let init = performance.now();
            
            this.draw(cells);
            this.updateCells(cells);
    
            let sleepTime = 1000/this.fps - (performance.now() - init);
            await new Promise(r => setTimeout(r, (sleepTime > 0 ? sleepTime : 0)));
        }
    }
}