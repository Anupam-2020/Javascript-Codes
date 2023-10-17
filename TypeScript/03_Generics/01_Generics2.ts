interface Person {
    name: string,
    age: number
}

function filterByPeople<T, U extends keyof T>(arr: T[], property: U, value: T[U]): T[] {
    const filteredPerson = arr.filter((person: T) => person[property] === value)
    return filteredPerson;
}

const persons: Person[] = [
    {
        name: 'Anupam',
        age: 27
    },
    {
        name: 'Anurag',
        age: 24
    },
    {
        name: 'Rahul',
        age: 22
    },
    {
        name: 'Satyam',
        age: 13
    }
];

console.log(filterByPeople(persons, "name", "Anupam"));