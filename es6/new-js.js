let i = 10

if (true) {
    let i = 20
}

console.log(i)

let data = ' android version is ' + i
data = `
    Android version is \n ${i * 20} \n
    ad;gllkas;dlgk
    asds'l'asddl loasd'lk
    afl    asd'fk;asdflf
    asd;llks;ald
`
console.log(data)

function populateData(dt) {
    return dt.toUpperCase() + Date.now()
}

let conData = populateData(`
adlkdfkmasdlkfmasdlfmmsadlkfk 
asdsfka;dlsfk 
sadvk;salkv
ads;llfksa;ldk
sd;daga;`)

console.log(conData)

let lambda = adlflkalsdkfkmt => adlflkalsdkfkmt.toUpperCase() + Date.now()
console.log(lambda(`12`))
