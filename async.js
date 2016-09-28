// promise-ok olyan mint a Kar. ajándék. Ha teljesül akkor resolve kül. rejected

// promise
function waitFor(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms );
    }) 
}

waitFor(1000).then(function() {
    console.log(1);
});
console.log(2);

// Generátorok
function* gen() {
    const a = yield 1;
    const b = yield 2;
    yield a + b;
    return 42;
}

const it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());