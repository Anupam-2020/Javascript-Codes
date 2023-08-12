// null safe on optional chaining.

const user = {
    firstName: 'Anupam Anand',
    address: {houseNo: '344', street: 'Bailey Road'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNo);