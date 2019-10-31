 "use strict";

/* Page functions */
 var NUMBERS_STACK = create();
 function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function pushNumber(num){
	var error = document.getElementById ("error");
	var stack = document.getElementById ("stack");
	error.innerHTML = "";  
 	try {
	 	push(NUMBERS_STACK,num);
	 	stack.innerHTML = toString(NUMBERS_STACK);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

function popNumber (){
	var error = document.getElementById ("error");
	var stack = document.getElementById ("stack");
	error.innerHTML = "";  
 	try {
	 	pop(NUMBERS_STACK);
	 	stack.innerHTML = toString(NUMBERS_STACK);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* stack Functions */
 var MAX_ELEM_STACK = 5; 
 function create(){
 	var stack = [];
 	for (var i=0; i<MAX_ELEM_STACK; i++){
 		stack[i] = Number.NaN;
 	}
 	return stack;
 } 

 function isEmpty(stack){
 	var isEmpty = false;
 	if (isNaN(stack[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(stack){
 	var isFull = false;
 	if (!isNaN(stack[MAX_ELEM_STACK-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(stack){
 	var length = 0;
 	while (length<MAX_ELEM_STACK && !isNaN(stack[length])){
 		length++;
 	}
 	return length;
 } 

 function push(stack,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "The element is not a number";
 	}
 	if (!isFull(stack)){
 		//console.log ("Length: " + lengthQueue(queue));
 		stack[size(stack)] = elem;
 		//console.log ("Length: " + lengthQueue(queue) + " " + elem);
 	} else {
 		throw "The stack is Full. You can't put the element in it";
 	}
 	return size(stack);
 } 

 function pop(stack){
 	var elem = 0;
 	if (!isEmpty(stack)){ 			
 		var lastIndex = size(stack)-1;	
 		elem = stack[lastIndex]; 
 		stack[lastIndex] = Number.NaN;
 	} else {
 		throw "The stack is empty. You can't pop any element";
 	} 	
 	return elem;
 } 

 function toString(stack){
 	var str = "";
 	if (!isEmpty(stack)){
 		var length = size(stack);	
 		for (var i=0; i<length-1;i++){
 			str = str + stack[i] + " - ";
 		} 		 		
 		str = str + stack[i]; 		
 	} 	
 	return str;
 } 

