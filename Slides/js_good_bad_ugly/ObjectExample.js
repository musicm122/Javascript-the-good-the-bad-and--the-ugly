//
// Each of the following will create a new empty object
//

var newObject = {}; // or 

var newObject = Object.create(null); // or

var newObject = new Object();

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
