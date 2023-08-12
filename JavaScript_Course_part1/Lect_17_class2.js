class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        return `${this.name} eats`;
    }

    isSuperCute() {
        return this.age <= 1;
    }
}

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    run() {
        return `${this.name} runs at ${this.speed} kmph`;
    }
}

const dog1 = new Dog("German Shephard", 10,45);
console.log(dog1);