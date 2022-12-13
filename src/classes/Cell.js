module.exports = class Cell {
    constructor({aliveChanceOnSpawn}) {
        this.alive = Math.random() < aliveChanceOnSpawn;
        this.neighbors = 0;
    }

    draw() { 
        process.stdout.write((this.alive ? '*' : ".")); 
    }
    
    sync() {
        if (this.neighbors == 3) this.alive = true;
        else if (this.neighbors < 2 || this.neighbors > 3) this.alive = false;
    }
}