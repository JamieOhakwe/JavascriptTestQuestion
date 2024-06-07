let items = [
    {name: 'bread', price: 2000},
    {name: 'car', price: 2000000},
    {name: 'sneakers', price: 20000},
    {name: 'house', price: 5000000},
    {name: 'phone', price: 500000},
    {name: 'laptop', price: 2000000},
]

 const total = items.reduce((currentTotal, item)=>{
  return item.price + currentTotal
},0)

console.log(total);