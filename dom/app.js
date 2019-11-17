let quotations = [
    { part: 'Mouse', qty: 1, price: 50 },
    { part: 'PenDirive', qty: 4, price: 500 },
    { part: 'Cabinate', qty: 3, price: 200 },
    { part: 'Processor', qty: 1, price: 8000 },
    { part: 'Keyboard', qty: 2, price: 400 },
]

console.log(document)

let quotationTable = document.getElementById('quotationTable')
console.log(quotationTable)

quotations.forEach((quotation, index) => {
    console.log(quotation)
    let row = quotationTable.insertRow(index + 1)
    row.insertCell(0).innerHTML = `${quotation.part}`
    row.insertCell(1).innerHTML = `${quotation.qty}`
    row.insertCell(2).innerHTML = `${quotation.price}`
    row.insertCell(3).innerHTML = `${quotation.price * quotation.qty}`
})