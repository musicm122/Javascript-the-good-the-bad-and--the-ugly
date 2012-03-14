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