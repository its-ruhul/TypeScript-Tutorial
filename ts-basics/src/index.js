"use strict";
//Basic Types
let id = 5;
let company = 'Ruhul Amin';
let isPublished = true;
let x = 'Hello';
//Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, 'John'],
    [2, 'Brad'],
    [3, 'Jill'],
];
// Union
let pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
let customerId1 = cid;
let customerId2 = cid;
// customerId = true;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes
class Person {
    // private id: number
    // protected name: string
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name}`;
    }
}
;
const brad = new Person(1, 'Brad Traversry');
const mike = new Person(2, 'Mike Jordan');
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.name);
// console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'jill']);
// Generics doesn't allow to do this
// numArray.push('hello');
