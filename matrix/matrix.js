export class Matrix {
    constructor(str) {
        this.rows = str.split('\n').map( r => r.split(' ').map( e => e * 1));
        const columns = [];
        const len = this.rows[0].length;
        for (let i = 0; i < len; i++, columns.push([])){}
        this.rows.forEach( (r) => r.forEach( (e, j) => columns[j].push(e)));
        this.columns = columns;
    }
}
