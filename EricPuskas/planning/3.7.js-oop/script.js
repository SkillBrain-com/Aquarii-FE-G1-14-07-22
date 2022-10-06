"use strict";
import { makeCompany, Company } from "./company.js";

// O functie
const getName = () => "John";

// getName - o metoda
const user = {
  name: "John",
  getName: function () {
    return this.name;
  }
};

console.log("Functie:", getName());
console.log("Metoda:", user.getName());

// Incapsure
let carBrand = "audi";

carBrand = carBrand.toUpperCase();
carBrand = carBrand.concat(" A4");
carBrand = carBrand.replace("A4", "A6");

console.log({ carBrand });

let carBrand2 = "bmw";
const result = carBrand2.toUpperCase().concat(" I8").replace("I8", "Z8");

console.log({ result });

function Stack() {
  let list = [];

  // Getter
  function get() {
    return list;
  }

  // Setter
  function push(value) {
    list.push(value);
  }

  function pop() {
    return list.pop();
  }

  return Object.freeze({ get, push, pop });
}

let stack = Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.get();

const company = {
  name: "Google",
  website: "www.google.com",
  employees: [],

  getName() {
    return this.name;
  },

  getWebsite() {
    return this.website;
  },

  setName(name) {
    this.name = name;
  },

  setWebsite(website) {
    this.website = website;
  },

  getEmployees() {
    return this.employees;
  },

  addEmployee(employee) {
    this.employees.push(employee);
  }
};

company.setName("Amazon");
company.setWebsite("www.amazon.com");
company.addEmployee("Bob");

console.log({
  company,
  companyName: company.getName(),
  companyWebsite: company.getWebsite(),
  employees: company.getEmployees()
});

const company2 = makeCompany("Netflix", "netflix.com");

company2.getName = company.getName;

console.log({
  company2,
  name: company2.getCompanyName(),
  name2: company2.getName(),
  website: company2.getCompanyWebsite()
});

const company3 = new Company("Youtube", "youtube.com");

company3.setCompanyName("Youtube2");

console.log({
  company3,
  name: company3.getCompanyName(),
  website: company3.getCompanyWebsite()
});

const fn1 = () => {
  console.log("FN1:", this);
};

function fn2() {
  console.log("FN2:", this);
}

const myObject = {
  fn1,
  fn2
};

myObject.fn1();
myObject.fn2();

const f1 = () => console.log("A:", this);

function f2() {
  console.log("B:", this);
}

f1();
f2();

console.log(this === window);

const company4 = {
  name: "Test",
  country: {
    name: "Romania",
    getName() {
      return this.name;
    }
  }
};

console.log(company4.country.getName());

const printer = {
  name: "John",
  print(greeting = "Hello") {
    console.log(`${greeting}, ${this.name}`);
  }
};

// Chemama direct metoda
printer.print();

setTimeout(printer.print, 1000);

// fn
// fn();
setTimeout(() => printer.print(), 2000);
setTimeout(function () {
  printer.print();
}, 2000);

const bindedPrint = printer.print.bind(printer);

setTimeout(bindedPrint, 3000);

// new Rectangle(siadno)

class Rectangle {
  // const myRectangle = new Rectangle(height, width);
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }

  getName() {
    return this.name;
  }

  getArea() {
    return this.height * this.width;
  }

  setArea(value) {
    this.area = value;
  }
}

const rect1 = new Rectangle(150, 250);

console.log({ rect1, name: rect1.getName(), area: rect1.getArea() });

class Square extends Rectangle {
  constructor(dimension) {
    super(dimension, dimension);
    this.name = "Square";
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }
}

const mySquare = new Square(50);

console.log({
  mySquare,
  name: mySquare.getName(),
  area: mySquare.getArea(),
  height: mySquare.getHeight(),
  width: mySquare.getWidth()
});

const mySecondRect = new Rectangle(250, 250);
// console.log(mySecondRect.getHeight());

// const house1 = new House(...)
class House {
  constructor(width, height, floors, color, windows, value) {
    this.width = width;
    this.height = height;
    this.floors = floors;
    this.color = color;
    this.windows = windows;
    this.value = value;
  }

  getHouseData() {
    return `House[width=${this.width}, height=${this.height}, floors=${this.floors}, color=${this.color}, windows=${this.windows}, value=${this.value}]`;
  }
}

const housingProject = () => {
  const house1 = new House(500, 500, 5, "pink", 50, 1000000);
  const house2 = new House(250, 250, 2, "black", 10, 100000);
  const house3 = new House(50, 50, 0, "no-color", 0, 100);

  console.log(house1.getHouseData());
  console.log(house2.getHouseData());
  console.log(house3.getHouseData());
};

housingProject();

// const mansion1 = new Mansion(..., occupants)
class Mansion extends House {
  constructor(width, height, floors, color, windows, value, occupants) {
    super(width, height, floors, color, windows, value);
    this.occupants = occupants;
  }

  getOccupants() {
    return this.occupants;
  }

  // [] addOcupant("Bob") -> ["Bob"]
  addOccupant(occupant) {
    this.occupants.push(occupant);
  }

  getHouseData() {
    return `Mansion[width=${this.width}, height=${this.height}, floors=${this.floors}, color=${this.color}, windows=${this.windows}, value=${this.value}, occupants=${this.occupants}]`;
  }
}

const mansionProject = () => {
  const mansion1 = new Mansion(1000, 1000, 4, "red", 10, 99999, ["John"]);

  mansion1.addOccupant("Bob");
  console.log(mansion1.getOccupants());

  const mansion2 = new Mansion(2000, 250, 3, "blue", 10, 99999, ["John"]);

  console.log(mansion1.getHouseData());
  console.log(mansion2.getHouseData());
};

mansionProject();

// Prototypes
const numbers = [1, 2, 3];

Array.prototype.getLastElement = function () {
  return this[this.length - 1];
};

console.log(numbers.getLastElement());

const numbers2 = [10, 0, -2];

console.log(numbers2.getLastElement());

/**
 * Nu faceti
 */
// Array.prototype.push = function push(value) {
//   return this.unshift(value);
// };

// Array.prototype.map = function () {
//   return "Hahahaha !";
// };

// const numbers3 = [1, 2];
// numbers3.push(3);

// console.log(numbers3);

// console.log(numbers3.map());

class Animal {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  getProps() {
    return {
      name: this.name,
      color: this.color,
      age: this.age
    };
  }

  setName(name) {
    this.name = name;
  }
}

const myPet = new Animal("Spike", "black", 4);

myPet.age = 10;
myPet.setName("Dorel");

console.log(myPet.getProps());
//       this
// const dog1 = new Dog();
// const dog2 = new Dog();
class Dog extends Animal {
  constructor(name, color, age, breed) {
    super(name, age, color);
    this.breed = breed;
  }

  getBreed() {
    return this.breed;
  }

  setBreed(breed) {
    this.breed = breed;
  }
}

const dog1 = new Dog("Mike", "black", 10, "labrador");

dog1.setBreed("Husky");

console.log(dog1.getBreed());
console.log(dog1.getProps());
