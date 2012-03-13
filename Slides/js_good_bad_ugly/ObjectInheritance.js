//Classical Inheritance
//Syntatic Sugar
//*Using Prototypical Inheritance
//we are creating a function called method that will exit in all functions
//Takes a name and a function
Function.prototype.method = function (name, func) {
	//adds a new function with the passed name as a function 
	//"name" and "func" as a function 
	//the current function object 
	this.prototype[name] = func;
    //returns the newly declared function
	return this;
	//note this refers to the anonomus function
};

function Person(value) {
    this.setName(value);
}
//Setter
Person.method('setName', function (value) {
    this.value = value;
    return this;
});

//Getter
Person.method('getName', function () {
    return this.value;
});

Person.method('toString', function () {
    return '(' + this.getName() + ')';
});


//Inheriting from object
function Ninja(value) {
    this.setName(value);
}

Ninja.inherits(Person);

Ninja.method('toString', function () {
    if (this.getName()) {
        return this.uber('toString');
    }
    return "-0-";
});