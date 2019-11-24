export class SqlTable {
    get sql() {
        return this._sql;
    }
    set sql(sql) {
        this._sql = sql;
    }
    query(hi, sql = 'sdsdlkgjsflkfjg') {
        console.log(`Executing SQL ${sql}`);
    }
}
let sqlTab = new SqlTable();
sqlTab.sql = 'select * from tabs';
console.log(sqlTab.sql);
sqlTab.query(`slvvjslk`);
sqlTab.query();
