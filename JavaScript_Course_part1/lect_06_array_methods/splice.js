// splice method.
// syntax => Array.splice(start, delete-count, insertedValue).

const myArray = ['item1','item2','item3'];

// delete operation using splice.
// syntax => Array.splice(startingIndex, deleteCount);
// const deletedItem = myArray.splice(1,2);
// console.log(deletedItem);

// insert operation using splice.
// syntax => Array.splice(startingIndex, deleteCount=0, insertedValue)
// myArray.splice(1,0,"inserted item");

// insert and delete both.
// syntax is same as insert. Just we need to put some value in deleteCount instead of 0.
const deletedItem = myArray.splice(1,2,"Anupam","Anand","Anurag");
console.log(myArray);
console.log(deletedItem);

// splice polyfill... Patially correct.
Array.prototype.mySplice = function(start, count, ...args) {

    let begin = start;
    if(begin >= this.length) return temp;

    let last = 0;
    if(!count) {
        last = this.length
    } else {
        if(begin + count >= this.length) {
            last = this.length
        } else {
            last = begin + count;
        }
    }

    let beforeBegin = arr.slice(0, begin);
    let deletedArr = arr.slice(begin, last);
    let afterDeleted = arr.slice(last, this.length);

    let j = 0;
    for(let i = 0; i < beforeBegin.length; i++) {
        this[j++] = beforeBegin[i];
    }

    for(let i = 0; i < args.length; i++) {
        this[j++] = args[i];
    }

    for(let i = 0; i < afterDeleted.length; i++) {
        this[j++] = afterDeleted[i];
    }
    return deletedArr;
}