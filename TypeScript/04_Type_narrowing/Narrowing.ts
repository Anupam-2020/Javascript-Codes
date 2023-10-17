// Narrowing is the process of refining the types to more specific types...

// typeof narrowing...
function detectType(val: number | string) {
    if(typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide ID");
        return;
    }
    return id.toLowerCase();
}

// narrowing using `in` property...
interface User {
    name: string,
    email: string
}

// interface Admin extends User {
//     isAdmin: boolean
// }

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}


function isAdminAccount(account: Admin | User) {
    // in operator -> 
    return "isAdmin" in account ? account.isAdmin : account.email;
}


// instanceof narrowing...
// 1. instanceof is used when the variable is associated with new-keyword...
function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// narrowing using `as` operator...
type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish { // `pet is Fish` is called type predicate...
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        return "Fish Food";
    } else {
        return "Bird Food";
    }
}

const food: Bird = {
    fly: () => {
        return "Bird Food";
    }
}

console.log(getFood(food));


// Descriminated union and exhaustive checking using never...
interface Circle {
    kind: 'circle',
    radius: number
}

interface Square {
    kind: 'square',
    side: number
}

interface Reactangle {
    kind: 'rectangle',
    length: number,
    width: number
}

type Shape = Circle | Square | Reactangle;
// type Shape = Circle | Square;


// Descriminated union...
function getArea(shape: Shape) {
    if(shape.kind === 'circle') {
        return Math.PI * (shape.radius ** 2);
    } else {
        // return shape.side ** 2;
    }
}


// Exhaustive checking...
function getArea2(shape: Shape) {
    switch(shape.kind) {
        case "circle": 
            return Math.PI * (shape.radius ** 2);
        case "square":
            return shape.side ** 2;
        case "rectangle": 
            return shape.length * shape.width;
        default:
            const _defaultForShape: never = shape;
            return _defaultForShape 
    }
}