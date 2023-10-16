let score: number | string = 33;
score = "Anupam";
score  = 34;

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let anupam: User | Admin = {
    name: "Anupam",
    id: 2
}

anupam = {
    username: "hc",
    id: 3
}

function getDbId(id: string | number) {
    // console.log(`DB is: ${id}`);

    if(typeof id === 'string') {
        id.toLowerCase();
    }
}

getDbId(3);
getDbId("3");

// Arrays...
const data: number[] = [1,2,3];
const data2: string[] = ["1", "2"];
// const data3: string[] | number[] = [1,2,3,"3"]; // all the elements can be either number or string but can't be mixed...
const data4: (string | number)[] = ["1","2", 4]; // can contain mixed types elements...

let seatAllotment: 'window' | 'aisle' | 'middle';

seatAllotment = "window";

