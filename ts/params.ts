export class SqlTable {
    private _sql: string

    get sql() {
        return this._sql
    }

    set sql(sql: string) {
        this._sql = sql
    }

    query(hi?: string, sql: string = 'sdsdlkgjsflkfjg') { //optional and default params
        console.log(`Executing SQL ${sql}`)
    }
}

let sqlTab: SqlTable = new SqlTable()
sqlTab.sql = 'select * from tabs'
console.log(sqlTab.sql)
sqlTab.query(`slvvjslk`)
sqlTab.query()