//http://addyosmani.com/resources/essentialjsdesignpatterns/book/n
//name:The function name.
//param:The name of an argument to be passed to the function. A function can have up to 255 arguments.
//statements:The statements comprising the body of the function.
// 
//function definitions..

//function declaration ||the function statement
//Global
function add(a,b){
	return a + b;
}

//The function expression (function operator)
//Function Literal
var add = function (a, b) {
    return a + b;
};
//The Function constructor

var add = new function(a, b){
	return a+b;
}

//Fibonacci sequence
//each item is formed by adding the previous two
function fib(n){
   return n<2?n:fib(n-1)+fib(n-2);
}


// Where the 'Object' constructor creates an object wrapper for
// a specific value, or where no value is passed will create an
// empty object and return it

// There are then a number of ways in which keys and values can
// be assigned to the object including:

newObject.someKey = 'Hello World';
newObject['someKey'] = 'Hello World';


// We can also define new properties on objects as follows,
// should you require more granular configuration capabilities
// (Thanks to Yehuda Katz for the less verbose version of this)

var man = Object.create(null);

// Properties can also be writable, enumerable and configurable
var config = {
  writable: true,
  enumerable: true,
  configurable: true
};

// Short-hand to use Object.defineProperty to add new properties
// with additional configuration 
var defineProp = function ( obj, key, value ){
  config.value = value;
  Object.defineProperty(obj, key, config);
}

defineProp( man, 'car',  'Delorean' );
defineProp( man, 'dob', '1981' );
defineProp( man, 'beard', false );
  
// And as we'll see a little later, this can even be used for inheritance
// like this..

var driver = Object.create( man );
defineProp (driver, 'topSpeed', '100mph');
driver.topSpeed // 100mph
