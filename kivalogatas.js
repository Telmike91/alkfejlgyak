"use strict"

const szamok = [2, 4, -2, 5];

function kivalogatas(arr, tulFn) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if( tulFn(arr[i] ) ) {
            result.push(arr[i]);
        }
    }
    return result;
}

function negativeE(p) {
    return p < 0;
}

console.log(kivalogatas(szamok, negativeE));

console.log(szamok.filter(negativeE));

console.log(szamok.filter(p => p < 0));

