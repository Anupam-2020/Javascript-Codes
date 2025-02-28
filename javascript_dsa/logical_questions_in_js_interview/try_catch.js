function test() {
    try {
        throw Error("This is error");
    } catch(error) {
        console.log("error");
        return "Inside catch";
    }  finally {
        console.log("Inside finally 1")
        return "Inside finally";
    }
}


console.log(test())