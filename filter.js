// Key-value pair
/* 
    Filter method: returns an array that fulfils a certain condition
*/
let items = [
    {name: 'bread', price: 2000},
    {name: 'car', price: 2000000},
    {name: 'sneakers', price: 20000},
    {name: 'house', price: 5000000},
    {name: 'phone', price: 500000},
    {name: 'laptop', price: 2000000},
]

// let filteredItems = items.filter((item)=>{
//    return item.price > 1000000
// })

// console.log(filteredItems);

let newFilter = items.filter((item)=>{
    return item.price > 100000;
})



console.log(newFilter);