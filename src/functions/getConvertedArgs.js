module.exports = function getConvertedArgs() {
	const args = process.argv.slice(2);
	return {
		aliveChanceOnSpawn: Number(args[4] || 0.5),
		cols: Number(args[1] || 10),
		fps: Number(args[3] || 10),
		generations: Number(args[2]) > 0 ? Number(args[2]) : Infinity,
		rows: Number(args[0] || 10),
	};
};
