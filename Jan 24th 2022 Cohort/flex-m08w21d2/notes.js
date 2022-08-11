// Main Principles of OOP
// Polymorphism
// Encapsulation
// Inheritance
// Abstraction

// this!!

class Animal {
  constructor(height, age, type) {
    this.height = height;
    this.age = age;
    this.type = type;
  }

  getHeight() {
    return this.height * 2;
  }

  getAge() {
    return this.age;
  }

  isKingOfTheJungle() {
    return this.type === "lion";
  }

  hasScales() {
    return this.type === "pangolin";
  }
}

class Lion extends Animal {
  constructor(height, age) {
    super(height, age, "lion");
  }
}

class Pangolin extends Animal {
  constructor(height, age, scaleSize) {
    super(height, age, "pangolin");
    this.scaleSize = scaleSize;
  }

  getScaleSize() {
    return this.scaleSize / 2;
  }
}

// const newAnimal = new Animal(12, 40, "tiger");
// newAnimal.getAge();

// const newLion = new Lion(12, 40);
// const newLion2 = new Lion(1, 4);
// console.log(newLion2.getHeight());
// console.log(newLion.isKingOfTheJungle());

const newPangolin = new Pangolin(5, 20, 10);

// console.log(newPangolin.getHeight());
// console.log(newPangolin.isKingOfTheJungle());
// console.log(newPangolin.getScaleSize());

// console.log(newPangolin.isKingOfTheJungle());
// const isKingOfTheJungle = newPangolin.isKingOfTheJungle;

// console.log(newPangolin.isKingOfTheJungle()); // <<<

let isKingOfTheJungleVar = newPangolin.isKingOfTheJungle;
isKingOfTheJungleVar = isKingOfTheJungleVar.bind(newPangolin);
console.log(isKingOfTheJungleVar()); // later time
