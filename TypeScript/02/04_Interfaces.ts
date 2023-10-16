interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string,
    startTrial(): string,
    getCoupon(couponname: string): number
}

const anupam: User = {
    dbId: 122,
    email: "anupam@gmail.com",
    userId: 1122,
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (name = "anupam") => {
        return name.length;
    },
    githubToken: "sacew",
}

interface User { // we can add exta methods in interface afer creating(re-opening of interface)...
    githubToken: string
}

// EX.2 ___________________________________________________________________________________________________________

interface Admin extends User, AnotherInterface { // inheritance of interface.
    role: 'admin' | 'ta' | 'learner'
}

interface AnotherInterface {
    age: number
}

const anurag: Admin = {
    dbId: 122,
    email: "anupam@gmail.com",
    userId: 1122,
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (name = "anupam") => {
        return name.length;
    },
    githubToken: "sacew",
    role: 'admin',
    age: 23
}