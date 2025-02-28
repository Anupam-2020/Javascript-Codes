class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size = this.size + 1;
    }

    addLast(data) {
        let newNode = new Node(data);
        if(!this.head.next) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next) {
            current = current.next;
        }

        current.next = newNode;
        this.size = this.size + 1;
    }

    addAt(index, data) {
        if(index < 0 || index > this.size) {
            console.error("Invalid input");
            return;
        }

        let newNode = new Node(data);

        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        for(let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.size = this.size + 1;
    }

    removeFromTop() {
        if(!this.head.next) {
            this.head = null;
            return null;
        }

        let removeHead = this.head;
        this.head = this.head.next;
        this.size = this.size - 1;
        return removeHead;
    }

    removeFrom(index) {
        if(index === 0) {
            return this.removeFromTop();
        }

        if(index > this.size) {
            console.error("Invalid index");
            return;
        }

        let current = this.head;
        for(let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        let removedIndex = current.next;
        current.next = current.next.next;
        this.size = this.size - 1;
        return removedIndex;
    }

    printLL() {
        let current = this.head;
        let count = 0;
        while(current) {
            console.log(count, current.data);
            current = current.next;
            count++;
        }
    }

    searchAnElement(element) {
        let current = this.head;
        let index = 0;
        while(current.data !== element && current.next) {
            current = current.next;
            index++;
        }
        console.log(current.data, "-> ", index);
    }

    convertArrayToLL(arr) {
        this.head = new Node(arr[0]);
        let current = this.head;

        for(let i = 1; i < arr.length; i++) {
            let temp = new Node(arr[i]);
            current.next = temp;
            current = temp;
        }
    }
}

// let linkedList = new LL();
// linkedList.addFirst(12);
// linkedList.addFirst(13);
// linkedList.addLast(16);
// linkedList.addLast(15);
// linkedList.addAt(2, 100);
// console.log(linkedList.removeFrom(2));
// linkedList.printLL();
// console.log(linkedList.size);
// linkedList.searchAnElement(16)

// let arr = [1,2,34,6,5];
// let llArr = new LL();
// llArr.convertArrayToLL(arr);
// llArr.printLL();
