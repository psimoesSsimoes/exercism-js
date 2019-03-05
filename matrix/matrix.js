const rows = (sentence) =>  sentence
		.split('\n')
		.map( c=>{
			return createRow(c)
		});

const createRow = (r) => r
	.split(' ')
	.map(number=>{
		return parseInt(number);
	});

const columns = (rows) =>{
        let columnsArr = [];
        let tmpArr = [];
        for (let j = 0; j < rows.length; j++){
            for (let i = 0; i < rows[j].length; i++){
				tmpArr.push(
					parseInt(rows[i][j])
				);
            }
            columnsArr.push(tmpArr);
            tmpArr = [];
        }
        return columnsArr;
}

export class Matrix{
	constructor(sentence){
		this.rows = rows(sentence);
		console.log(this.rows);
		this.columns = columns(this.rows);
	}
}
