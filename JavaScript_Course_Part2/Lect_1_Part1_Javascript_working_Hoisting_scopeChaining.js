// How javascript works.....
// Step 1 -> Compilation. ( Whole code gets parsed before execution)
     // 1. Compilation ensures early error checking.
     // 2. Compilation ensures in determining early scope for variables.
// Step 2 -> Code Execution.
     // 1. Global execution context is created first in this step....
     // 2. Global execution context occurs in further two steps -> 
            // 1. Creation phase -> variables/functions get memory ( if variable is defined with var then initialized by undefined but in-case of let/const it is uninitialized and remains in `temporal dead zone`).
                                    // Also function-declaration not only get memory but also defined completely during creation phase itself.
                                    // Now function-expression does not get defined at creation phase.
            // 2. Code Execution phase.

// Note:- Hoisting is default behaviour of javaScript which moves declarations(variable/function) at the top.

// Note:- Scope-chain -> if a variable is called in function scope but variable is not present then it'll search in parent(lexical environment) then in global environment and take the value from there.