const superHeros: string[] = [];
const heroPower: Array<number> = [];

type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = [];
const MLModels: number[][] = [ // arrays inside array...
    [255,255,255],
    []
]

superHeros.push("ironman");
heroPower.push(2);
allUsers.push({name: 'Anupam', isActive: true});
console.log(allUsers);