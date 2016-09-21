"use strict";

const cim = {
    varos : "Budapest",
    utca : "Pázmány Péter sétány",
    hazszam: "1/c",
    // toString() : ...
    toString : function() {
        return `${this.varos}, ${this.utca}`;
    }
};
cim.iranyitoszam = '1117';

// console.log(cim);
// console.log(cim.toString());

class Point {
    constructor(x,y) {
        this._x = x; // _<változónév> -> privát
        this._y = y;
    }
    setX(value) {
        this._x = value;
    }

    set x(value) {
        this._x = value;
    }
    get g() {
        return this._x;
    }

} // függvény lesz a háttérben

const pont = new Point(10,20);

pont.setX(2);
console.log(pont);

class Circle extends Point {
    constructor(x, y, r) {
        super(x,y);
        this._r = r;
    }
}

const circle = new Circle(20,30,40);

console.log(circle);