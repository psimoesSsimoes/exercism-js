export const toRna = (dna, map={ G: 'C', C: 'G', T: 'A', A: 'U' }) =>
	dna
	.split('')
	.map( c=>{
		if (c in map) return map[c];
		throw new Error("Invalid input DNA.");
	})
	.join('');
