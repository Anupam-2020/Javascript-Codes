class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    printNode() {
        console.log(this.data);
    }
}

class LinkedLists {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        
        if(!this.head) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    size() {
        let current = this.head;
        let count = 0;
        while(current) {
            count++;
            current = current.next;
        }
        return count;
    }

    addAtIndex(data, index) {
        let newNode = new Node(data);
        let currentNode = this.head;
        let indexCount = 1;
        if(this.size() < index) {
            console.log("Invalid Index");
            return;
        }
        
        while(indexCount < index) {
            indexCount++;
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    removeTop() {
        if(!this.head) {
            return;
        }

        let currentNode = this.head;
        this.head = currentNode.next;
        return currentNode.data;
    }

    removeLast() {
        if(!this.head) {
            return;
        }
        let currentNode = this.head;
        while(currentNode.next.next) {
            currentNode = currentNode.next;
        }

        let removedNode = currentNode.next;
        currentNode.next = null;
        return removedNode;
    }

    removeAt(index) {
        if(this.size() < index) return;

        let currentNode = this.head;
        for(let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }

        let removedNode = currentNode;
        currentNode.next = currentNode.next.next;
        return removedNode; 
    }

    printNode() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

let node = new Node(23);
// node.printNode();
let data = new LinkedLists();
data.addFirst(12);
data.addFirst(13);
data.addFirst(1);
data.addFirst(12);
data.addLast(56);
data.addAtIndex(100,2);
// data.removeTop();
// console.log("--------------------------------");
data.printNode();
// data.removeLast();
console.log("--------------------------------");
data.removeAt(2);
data.printNode();
// console.log(data.size());