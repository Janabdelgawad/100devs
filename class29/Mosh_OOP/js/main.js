//object literal syntax
const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};
// circle1.draw();



//factory function
function createCircle(radius){
    return circle = {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
};
// const circle2 = createCircle(2);
// circle2.draw();



//constructor function
function Circle(radius){
    console.log('this', this);
    this.radius = radius;
    this.draw   = function() {console.log('drawww')};
}
//global object (window in my case)
// const circle3 = Circle(1);
//new circle object,set "this" to object, return "this"
// const circle4 =  new Circle(1);



// primitives & references
let x1 = 10;
let y1 = x1; //copied
x1 = 20;
//x1 = 20 y1 = 10, independent, value is copied

let x2 = { value: 10};
let y2 = x2; //referrenced
x2.value = 20;
//x2 = 20 y2 = 20, dependent, address of value is copied



//adding or deleting properties
function CircleCircle(radius) {
    this.radius = radius,
    this.draw = function() {
        console.log('draaaaa3333ww');
    }
}
const circle5 = new CircleCircle(10);
circle5.location = { x: 1 }; //dot operator easier, for static, no white space, no special chars names
circle5['location'] = { y: 2}; //bracket notation, for dynamic names

// circle5.what is this = { x: 5};  <---- errror
circle5['$%$#what is this'] = {lala: 3};



//enumerating properties
for(key in circle5){ //get all objects
    //console.log(key, circle5[key])
}
const keys = Object.keys(circle5); //get all keys
// console.log(keys);
if("radius" in circle5) { //check for a property's existence
}



//private properties
function CircleCircleCircle(radius){
    // this.defaultLocation = { x: 1, y: 9 }; //public
    let defaultLocation = { x: 1, y: 9 };    //private

//getters & setters
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        }, 
        set: function(value){
            defaultLocation = value;
        }
    });
}
// const circle6 = CircleCircleCircle(10);
// circle6.defaultLocation();


function Stopwatch(){
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        if(running) throw new Error('you cant start twice')
        running = true
        startTime = new Date()
    };
    this.stop = function()  {
        if(!running) throw new Error('you cant stop twice')
        running = false
        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    };
    this.reset = function(){ 
        startTime = null
        endTime   = null
        running   = false
        duration  = 0
    };
    Object.defineProperty(this, 'duration', {
        get: function() { return duration }
    });
};
const sw = new Stopwatch();
// sw.start(); // cant call twice in a row
// sw.stop(); // cant call twice in a row
// sw.duration(); //initial 0
// sw.reset();





