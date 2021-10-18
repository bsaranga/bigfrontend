function sum(a, b, c, d) {
    return a + b + c + d
}

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) return func(...args)
        return function(...args2) {
            return curried(...args, ...args2)
        }
    }
}

function curryTwo(func) {
    return function c(...args) {
        return (args.length >= func.length) ? func(...args) : (...args2) => c(...args, ...args2)
    }
}


let currySum = curry(sum)
//console.log(currySum(1)(2)(3)(4))

let currySum2 = curryTwo(sum)
//console.log(currySum2(1,2)(3)(4))


function curryX(func) {
    return function curried() {
        return arguments.length >= func.length ? func(...arguments) : curried.bind(null, ...arguments);
    }
}

let foo = (...args) => console.log(args);
let bar = (...args) => (...args2) => console.log(...[...args, ...args2]);

let curryFn = fn => (inner = (...args) => (args.length >= fn.length) ? fn(...args) : (...args2) => inner(...args, ...args2))

let curr = curryFn(sum);

console.log(curr(1)(2)(3)(4))