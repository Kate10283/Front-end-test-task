"use strict";

// task 2

function abc(a, b, c) {
    return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}


function curry(f) {
    var arity = f.length;
    return function f1(...args) {
        if (args.length >= arity) {
            return f(...args);
        } else {
            return function f2(...nextArgs) {
                var newArgs = args.concat(nextArgs);
                return f1(...newArgs);
            };
        }
    };
}

let curriedAbc = curry(abc);
let curriedAbcdef = curry(abcdef);

console.log(curriedAbc('A')('B')('C')); // 'ABC'
console.log(curriedAbc('A', 'B')('C')); // 'ABC'
console.log(curriedAbc('A', 'B', 'C')); // 'ABC'

console.log(curriedAbcdef('A')('B')('C')('D')('E')('F')); // 'ABCDEF'
console.log(curriedAbcdef('A', 'B', 'C')('D', 'E', 'F')); // 'ABCDEF'






// task 3

function drawRating(vote) {
    for (let x = 0; x < 101; x += 20) {
        if (x == 0) {
            if (vote >= x && vote <= x + 20) {
                return mas[0];
            }
        }
        else if (vote > x && vote <= x + 20) {
            return mas[x / 20];
        }
    }
}

let mas = [];
mas = ['★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★