let arr = [10, 'a', {name: 'gaurav'}, 1];

//stack
arr.push(20);
arr.unshift(32);
console.log('adding', arr);
//queue
arr.pop();
arr.shift();
console.log('removing', arr);


let b = [2,3, 5, 6, 8];
const someVal = b.some((val)=> { return val % 2 == 0;})
console.log(someVal);
// every, find

const findVal = b.find((val)=> { return val % 2 == 0;})
console.log(someVal);


//map
arr.map(val=>  console.log('map', val));

//flatMap
let flatMapVal = [4,2, [[66]], 2];
const flatMap = flatMapVal.flatMap((val)=> { return val; })
console.log(flatMap);


//slice

//splice
const a = ['a', 'b', 'c', 'd'];
const slicedVal = a.splice(0, 1, ['aa', 'bb']);
console.log(slicedVal, a);

//reduce method
const z = [1,2,3,4,5,6];
const reduce = z.reduce((prev, cur)=> {
    console.log(prev, cur);
    return prev+cur;
})

console.log('Reducer',reduce);

//reduce right

const x = [1,2,3,4,5,6];
const reduceRight = x.reduceRight((prev, cur)=> {
    console.log(cur, prev);
    return cur;
});

console.log('reduce Right',reduceRight);


// 

const obj1 = { 'a': 1};
const spreadOperator = [1,2,3,4];

console.log('spreadOperator',[10, ...spreadOperator, 5]);

console.log('creating array as object', {...spreadOperator});

// Function in javascript

function helloToWorld() {
    console.log(this);
}

helloToWorld()

// normal function 
const square = {
    side: 2,
    perimeter: function calcPeri() {
        return 4*this.side;
    }, 
    area: function calcArea() {
        return this.side*this.side;
    }
}

console.log('normal function', square.perimeter());

// arrow function
const quad = {
    side: 2,
    perimeter:  calcPeri=() =>{
        return 4*this.side;
    }
}

console.log('arrow function', quad.perimeter());
//above console will return NaN

//lets modify

const quad1 = {
    side: 2,
    perimeter:  calcPeri=(side) =>{
        return 4*side;
    }
}

console.log('arrow function', quad1.perimeter(2));


//function closure


//currying function

const sum = (firstOp)=>(secondOp) => firstOp + secondOp;
console.log('currying',sum(1)(2));

//constructive function
function Counter() {
    let count = 0;
    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    }
    this.print = function() {
        console.log(count);
    }
}

let counter = new Counter();
console.log('constructive function',counter.up());


//generator function


function* idGenerator() {
    yield 1;
    //transformation
    yield 2;

    yield 3;
}

const gen = idGenerator();

console.log('Generator',gen.next().value);

//normal function we cannot do
const idGen=() =>{
    let id = 0;
    while(true) {
        return ++id;
    }
}

console.log(idGen());
console.log(idGen());


//Class Concept
class Car {
    color;
    constructor(color) {
        this.color = color;
    }
    static numberOfWheels = 4;
    #engineStatus = true;
    //static cannot be accessed through object
    static getWheels() {
        console.log('data')
    }
}

let carObj = new Car('red');
console.log('accessing the private variables outside the class',carObj.engineStatus);
console.log('number of wheels which is public', Car.numberOfWheels);
console.log(Car.getWheels())
console.log('consturctor accessing variable', carObj.color);

Car.getWheels();


//Inheritence
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MyCustomError';
        console.log(this.name)
    }
}

const a1  =  new MyCustomError('error');
console.error(a1);

//try and catch block

try {
    throw new Error('This is an error');
}catch(e) {
    console.log(e);
}