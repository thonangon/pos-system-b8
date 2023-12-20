let tbody = document.querySelector('tbody');
let show_result = document.querySelector('.show_result')
let Income = document.querySelector('.Income');

// -----------savs localstorage from  cetagory------------------

let category = document.querySelector('.category ')
let CTY = JSON.parse(localStorage.getItem('stocks'))
let some_CTY = 0
for (let value of CTY){
    some_CTY += 1
}
category.lastElementChild.lastElementChild.textContent = some_CTY

// ----------------------------save localstorage from product-----------------------------

let instoks;
instoks = JSON.parse(localStorage.getItem("products"));
//  --------------display products Row ----------------------------------

function CreateRow(stock){
    let tr = document.createElement('tr')
    let Id = document.createElement('td');
    Id.textContent = stock.id
    let product = document.createElement('td');
    product.textContent = stock.name;
    let Cgy = document.createElement('td');
    Cgy.textContent = stock.categroy;
    let pri = document.createElement('td');
    pri.textContent = stock.price;
    let AMT = document.createElement('td');
    AMT.textContent = stock.Amount;
    let program = document.createElement('td')
    program.textContent = stock.Sell_program;
    tr.appendChild(Id);
    tr.appendChild(product);
    tr.appendChild(Cgy);
    tr.appendChild(pri);
    // tr.appendChild(AMT);
    tbody.appendChild(tr)
}

let count = 0
let someprice = 0
let checkecategory = instoks[0].Cetagory
for(let i = 0; i <instoks.length; i++){
    if(i < 4){
      CreateRow(instoks[i])  
    }
    count += 1
    someprice += instoks[i].price;

}

// Income.lastElementChild.lastElementChild.textContent = someprice+"$"
show_result.firstElementChild.textContent = count
