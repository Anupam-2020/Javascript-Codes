// generics in classes...

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    private _cart: T[] = [];

    addToCart(product: T) {
        this._cart.push(product);
    }

    get cart(): T[] {
        return this._cart
    }
}

const getSellable = new Sellable();

const product: Course = {
    name: 'Anupam', author: 'Anand', subject: 'CSE'
}

getSellable.addToCart(2)
getSellable.addToCart(product);
console.log(getSellable.cart);