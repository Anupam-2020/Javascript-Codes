const score: Array<number> = [];

function identityOne(value: boolean | number): boolean | number {
    return value
}

function identityTwo(val: any): any {
    return val
}

function identityThree<T>(value: T): T { // `T` in angular bracket checks which data-type is passed in the params during function calling.
    return value
}

console.log(identityThree(23)); // ex-1

interface User {
    name: string,
    age: number
}

const value: User = {
    name: 'Anupam',
    age: 0
}

console.log(identityThree(value)); // ex-2
console.log(identityThree<User>({name: 'Anupam', age: 9})) // ex-3


// generics in arrays...
function getSearchPage<T>(products: T[]): T {
    return products[3];
}

// generics in arrow-function...
const getProducts = <T, >(products: T): T => {
    return products[4];
}

console.log(getProducts([1,2]));


// more in generics...
interface Database {
    connection: string,
    username: string,
    password: string
}

function databaseFunction<T, U extends Database>(valOne: T, valTwo: U): Object {
    return {
        valOne,
        valTwo
    }
}

const userData: Database = {
    connection: 'MySQl',
    username: 'Anupam',
    password: 'Anand'
}

console.log(
  databaseFunction<Database, Database>(
    { connection: "postgre", username: "Anurag", password: "Anand" },
    userData
  )
);