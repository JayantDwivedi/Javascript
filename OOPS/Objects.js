// Object: A unique entity which contains methods and properties.

// There are three ways to use and create Objects.
// 1. Using object literal

const car = {
  name: "santro",
  model: new Date(), // system date
  price: 320000,

  getColor: function () {
    return "red";
  },
};

console.log(car.name);
console.log(car.getColor());

// 2. Using new keyboard

function cycle(name, price, type) {
  this.name = name;
  this.price = price;
  this.type = type;
}

const decathlonCycle = new cycle("RoadRider", 7000, "Hybrid bike");
const heroCycle = new cycle("Mountain bike", 15000, "MTB");

console.log(decathlonCycle);
console.log(heroCycle);

// 3. Using create keyboard

const bike = {
  name: "Scram 411",
  model: "2022",
  price: 2.5,
};

const royalEnfieldScram = Object.create(bike);

console.log(royalEnfieldScram.name);
