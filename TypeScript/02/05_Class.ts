// class User { // M-1 for creating class...
//     public email: string
//     name: string
//     private readonly city = "Patna"

//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }


class User { // M-2 for creating class... ( here we get all variables from constructor itself, don't write `this` like prev method...)

  readonly city = "Patna";
  private _age: number; // private variable should be written with underscore in the beginning.

  constructor (
    public email: string,
    public name: string,
    protected userId: number
  ) {}

  public get age(): number { //getter
    return this._age;
  }

  public set age(age: number) { // setter
    // setter don't have a return type.
    if (age < 18) {
      throw new Error("Age should be above 18");
    }
    this._age = age;
  }
}

const anupam = new User("anupam@email.com", "Anupam", 123);

anupam.age = 24
anupam.email = "anupam@gmail.com";

console.log(anupam.email);
console.log(anupam.age);



// Inheritance...
class SubUser extends User {
  isFamily: boolean = true

  getUserId(): number {
    return this.userId
  }
}

const subUser = new SubUser("anupam@email.com", "Anupam", 123);