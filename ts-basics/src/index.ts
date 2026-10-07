//Basic Types
let id: number = 5;
let company: string = 'Ruhul Amin';
let isPublished: boolean = true;
let x: any = 'Hello';

//Arrays
let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'John'],
  [2, 'Brad'],
  [3, 'Jill'],
];

// Union
let pid: string | number;
pid = '22';

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// console.log(Direction2.Left);

//Objects

// Type can be used with primitives and unions
type User = {
  id: number,
  name: string
}

// Interfaces
// Interfaces can be used Objects
interface user1 {
  readonly id: number,
  name: string,
  age?: number
}

const user: user1 = {
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1;
let customerId1 = <number>cid;
let customerId2 = cid as number;

// customerId = true;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number
  name: string
  register() : string
}

// Classes
class Person implements PersonInterface{
  // private id: number
  // protected name: string

  id: number
  name: string
  
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name}`
  }
};

const brad = new Person(1, 'Brad Traversry');
const mike = new Person(2, 'Mike Jordan');

class Employee extends Person {
  position: string;
  
  constructor(id: number, name: string, position: string) {
    super(id, name);

    this.position = position;
  }
}

const emp = new Employee(3, 'Shawn', 'Developer');

// console.log(emp.name);
// console.log(emp.register());

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['brad', 'jill']);

// Generics doesn't allow to do this
// numArray.push('hello');


