import React from "react";

export function typescriptBasics() {
  let name: String = "Anupam";
  let age: number | string;
  let hobbies: string[];
  let role: [number, string];
  let isEmployee: boolean;

  age = "23";

  role = [3, "false"];

  // type Person = {
  //   name: String;
  //   age?: number
  // }

  interface Person {
    name: String;
    age?: number;
  }

  interface Humam extends Person {
    profession: string;
  }

  let person: Person = {
    name: "Anupam",
    // age: 11
  };

  type X = {
    a: string;
    b?: number;
  };

  type Y = X & {
    c: string;
    d: boolean;
  };

  let value: Y = {
    a: "Anu",
    c: "Pam",
    d: false,
  };

  console.log(value.c);

  let lotsOfPeople: Person[];

  function printName(name: string) {
    console.log(name);
  }

  // let printName: (name: string) => void;

  printName("Anupam");
}
