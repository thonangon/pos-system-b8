let tbody = document.querySelectorAll('tbody')
let total = document.querySelector('.total h1')
function somee() {
    let tb = tbody[1]
    let plus = 0
    // console.log(tb.children[0].lastElementChild);
    for (let i= 0; i<tb.children.length ; i++){
        let some = tb.children[i].lastElementChild.textContent
        console.log(parseInt())
        let d  = some.replace('$',"")
        plus += parseInt(d)
    }
    console.log(plus);
    total.textContent = "Tota: " + plus + "$"

}
// somee()
let prine = document.querySelector('.prine button')
console.log(prine)
function princt (){
    window.print();
}
prine.addEventListener('click' , princt)
let instoks;
instoks = JSON.parse(localStorage.getItem("products"));
console.log(tbody);
console.log(instoks);
function createRow() {
    for (let i = 0; i < instoks.length; i++) {
        let tr = document.createElement('tr');
        tr.dataset.index = i
        tr.addEventListener('click', getproduct)
        let productID = document.createElement('td');
        productID.textContent = instoks[i].id
        let productname = document.createElement('td');
        productname.textContent = instoks[i].name
        let category = document.createElement('td');
        category.textContent = instoks[i].categroy
        let price = document.createElement('td');
        price.textContent = instoks[i].price
        // console.log(price);
        tr.appendChild(productID)
        tr.appendChild(productname)
        tr.appendChild(category)
        tr.appendChild(price)
        tbody[0].appendChild(tr)
    }

}
function getproduct(event) {

let trs = event.target.closest('tr')
// console.log(trs.children[3]);
let trr = document.createElement('tr');
let tdid = document.createElement('td');
tdid.textContent = trs.children[1].textContent
let CTY = document.createElement('td');
CTY.textContent = trs.children[2].textContent;
let Q = document.createElement('td');
let input = document.createElement('input')
input.classList.add('winth')
input.setAttribute('type', 'number');
input.setAttribute('min', '0');
input.addEventListener('change',updateData)
input.value = 1
Q.appendChild(input);
let pricrr = document.createElement('td')
pricrr.textContent = trs.children[3].textContent
let totolPrice=document.createElement('td');
totolPrice.textContent = trs.children[3].textContent
trr.appendChild(tdid)
trr.appendChild(CTY)
trr.appendChild(Q)
trr.appendChild(pricrr)
trr.appendChild(totolPrice)
tbody[1].appendChild(trr)
somee()
}
function updateData(event){
    let trtotal = event.target.closest('tr')
    console.log(tbody[1].children);
    // console.log(trtotal);
    let tdinput = trtotal.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling  
    let some = tdinput.textContent.replace('$', '') * event.target.value
    // console.log(some);
    let last = trtotal.lastElementChild
    // console.log(last)
    last.textContent = some + "$"
    somee()
}
createRow()