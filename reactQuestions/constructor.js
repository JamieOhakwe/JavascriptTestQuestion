
class Car{
    constructor(color, brand, price){
        this.color = color
        this.brand = brand
        this.price = price
    }
}

let car1 = new Car('black', 'toyota', 4000000);
let car2 = new Car('gray', 'Range Rover', 24000000);


console.log(car1.brand, 'and', car2.brand);
