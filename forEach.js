/*
    array.forEach(): executes a provided callback func tion
    once  for each array element. 
*/

let items = [
    {name: 'bread', price: 2000},
    {name: 'car', price: 2000000},
    {name: 'sneakers', price: 20000},
    {name: 'house', price: 5000000},
    {name: 'phone', price: 500000},
    {name: 'laptop', price: 2000000},
]

 items.forEach((item)=>{
//    let newItem = item.price + 250
   let newItem = [...items, item.price + 250]
     console.log(newItem);
})
