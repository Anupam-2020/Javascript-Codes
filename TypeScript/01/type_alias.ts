type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number // question mark denotes optional entry...
}


function createUser(user: User): User {
    return {name: "", email: "", isActive: true, _id: "12234"}
}

createUser({name: "", email: "", isActive: true, _id: "12234"});


let myUser : User = {
    _id: "12234",
    name: "anupam",
    email: "h@a.com",
    isActive: false
}

myUser.email = 'anupam@anui';
// myUser._id = "rger"



type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

