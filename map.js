/*
Map: this returns each keys in the array
*/

let items = [
    {name: 'bread', price: 2000},
    {name: 'car', price: 2000000},
    {name: 'sneakers', price: 20000},
    {name: 'house', price: 5000000},
    {name: 'phone', price: 500000},
    {name: 'laptop', price: 2000000},
]

let bigItem = items.map((item)=>{
    
})

// let filteredItems = items.map((item)=>{
//    return item.price
// })

// console.log(filteredItems);

let newItems = items.map((item)=>{
    return item.price
})
console.log(newItems);
