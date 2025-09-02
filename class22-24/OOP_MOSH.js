// what is oop?
// a programming paradigm that is centered around objects rather than functions


// is oop a programming language or a tool? if not then what is it?
// no, a programming paradigm or a style of programming


// what are the 4 pillars/core concepts of oop?
// -encapsulation => group related variables & functions together => reduce complexity, increase reusability

// -abstraction   => hide details & complexity => reduce complexity, isolate changes' impact

// -inheritance   =>  derive new code from exisitng ones => eliminate redundency

// -polymorphism  => 1 interface, many implementations => refactor complex switch/case statements
//---------------------------------------------------------
// -encapsulation => object = property + method
// -abstraction   => hide properties/methods from ui
// -inheritance   => types(arr/str/etc..) inherited from obj
// -polymorphism  => parental function overriden in child's


// override vs overload ?
// override: 1 method, same name & parameters, different functionality
// overload: multiple methods, same name, different parameters, same functionality
// Overload = same job, different tools.
// Override = new way of doing/changing the job


//properties vs methods?
// hold value
// define logic


// //creating objects with object-literal syntax is an issue only if that object has _________
// behavior (wouldn't be DRY)

//list all the primitive and reference data types in js
// primitive:
// -Number
// -String
// -Boolean
// -Symbol
// -undefined
// -null

// reference: 
// -Object
// -Function
// -Array


// how are primitives vs references/objects copied?
// copied by value vs by reference


// for-in vs for-of loops in js?
// -for-in: loop over key/"indexes"(properties) of an obj/arr
// -for-of: loop over "values" of iterables(arr,str,map,set,..)




let circle = {
    radius: 1,
    draw: function() {
        console.log('draw')
    }
};
// circle.draw()
// console.log(circle.radius)

//factory function
function createCircle(radius) {
    return{
        radius,
        draw: function() {
            console.log('draw')
        }
    };   
}
// const circle1 = createCircle(1);
// console.log(circle1)

//constructor function
function CreateCircle(radius) {
    this.radius = radius;
    this.draw   = function() {
        console.log('draw')
    };
    //the 'new' keyword implicitly returns the new object
}
const circle2 = new CreateCircle(2);
// console.log(circle2)
//adding properties
//dot notation
circle2.location = { x: 1 };
//bracket location
circle2['location'] = { x: 3 };
//remove properties
delete circle2.location;
delete circle2['draw'];
// console.log(circle2)

const circle3 = new CreateCircle(10);

for(key in circle3) {
    // console.log(key)
}

//to get all the keys in an object
const keys = Object.keys(circle3)
// console.log(keys)

//to check for the existence of a property/method in an object
if('radius' in circle3) {
    // console.log('it has a fokin radius')
}


function StopWatch() {
    let duration, startTime, endTime, running = 0;
    
    this.start = function() { 
        if(running) throw new Error('Stopwatch has already started.');
        running   = true;
        startTime = new Date();
    };
    
    this.stop  = function() { 
        if(!running) throw new Error('Stopwatch is not started.');
        running = false;
        endTime = new Date();
        const seconds = 
        (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    
    this.reset = function() {
        startTime = null;
        endTime   = null;
        duration  = 0;
        running   = false;
    };
    
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
        set: function(value) { duration = 0; }
    })
}

const sw = new StopWatch();
console.log(sw.reset())
sw.start()
sw.stop()
