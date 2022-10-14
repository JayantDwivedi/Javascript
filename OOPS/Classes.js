// Classes– Classes are blueprint of an Object. A class can have many Object,
// because class is a template while Object are instances of the class or the concrete implementation.

// There are two ways to implement clases in javascript
// 1. using class keyboard. (ES6)

class Bike {
  constructor(name, brand, type) {
    (this.name = name), (this.brand = brand)
    this.type = type;
  }
}
class Car{
  constructor(name,brand,type){
    (this.name = name),
      (this.brand = brand);
    this.type = type;
  }
const avengar = new Bike("Avengar Street", "Bajaj", "Cruizer");
const r15 = new Bike("R 15", "Yamaha", "Sports Bike");

console.log(avengar);
console.log(r15);

// 2. Traditional way using function

function Car(name, brand, price) {
  this.name = name;
  this.brand = brand;
  this.price = price;
}

Car.prototype.getColor = function (color) {
  return `Looks awsome in ${color}`;
};

const Creta = new Car("Hyundai Creta", "Hyundai", 8.5);
const BMW = new Car("BMW Q7", "BMW", 80.9);

console.log(Creta.getColor("Red"));

console.log(BMW);
