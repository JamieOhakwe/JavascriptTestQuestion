let items = [
    {name: 'bread', price: 2000},
    {name: 'car', price: 2000000},
    {name: 'sneakers', price: 20000},
    {name: 'house', price: 5000000},
    {name: 'phone', price: 500000},
    {name: 'laptop', price: 2000000},
]

let newItems = items.find((item)=>{
   return item.name === 'house'
})

console.log(newItems);