const User = {
    name: 'Anupam',
    email: 'Anupam@gmail.com',
    isActive: true,
    isPaid: false
}

function createUser({name: string, isPaid: boolean}) {

}

const newUser = {name: 'Anupam', isPaid: false, email: 'anupam@gmail.com'} // one of the ways to put extra params while function calling.

createUser(newUser);


function createCourse():{name: string, price: number} {
    return {name: 'reactjs', price: 399}
}

