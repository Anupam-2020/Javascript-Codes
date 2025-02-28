function filterByPeople(arr, property, value) {
    var filteredPerson = arr.filter(function (person) { return person[property] === value; });
    return filteredPerson;
}
var persons = [
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
