function about(hobby, sport) {
    console.log(this.firstName, this. age, hobby, sport);
}

const user1 = {
    firstName: 'Anupam',
    age: 8
}

const user2 = {
    firstName: 'Anand',
    age: 10
}

// call method.
about.call(user1,'Chess','Cricket');
about.call(user2, 'Books','Basket ball');

// apply method.
about.apply(user1, ['Coding', 'Ludo']);

// bind
const func = about.bind(user2);
func('Coding', 'Basket Ball');