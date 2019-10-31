"use strict";

/* Page functions */
 var NUMBERS_QUEUE = create(); function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function addNumber(num){
	var error = document.getElementById ("error");
	var queue = document.getElementById ("queue");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_QUEUE,num);
	 	queue.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

function pollNumber (){
	var error = document.getElementById ("error");
	var queue = document.getElementById ("queue");
	error.innerHTML = "";  
 	try {
	 	poll(NUMBERS_QUEUE);
	 	queue.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* queue Functions */
 var MAX_ELEM_QUEUE = 5; 
 function create(){
 	var queue = [];
 	for (var i=0; i<MAX_ELEM_QUEUE; i++){
 		queue[i] = Number.NaN;
 	}
 	return queue;
 } 

 function isEmpty(queue){
 	var isEmpty = false;
 	if (isNaN(queue[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(queue){
 	var isFull = false;
 	if (!isNaN(queue[MAX_ELEM_QUEUE-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(queue){
 	var length = 0;
 	while (length<MAX_ELEM_QUEUE && !isNaN(queue[length])){
 		length++;
 	}
 	return length;
 } 

 function add(queue,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "The element is not a number";
 	}
 	if (!isFull(queue)){
 		queue[size(queue)] = elem;
 	} else {
 		throw "The queue is Full. You can't put the element in it";
 	}
 	return size(queue);
 } 

 function poll(queue){
 	var elem = 0;
 	if (!isEmpty(queue)){ 			
 		var lastIndex = size(queue)-1;	
 		elem = queue[0]; 		 	 		
 		for (var i=0; i<lastIndex;i++){
 			queue[i] = queue[i+1];
 		} 		 		
 		queue[i] = Number.NaN;
 	} else {
 		throw "The queue is empty. You can't poll any element";
 	} 	
 	return elem;
 } 

 function toString(queue){
 	var str = "";
 	if (!isEmpty(queue)){
 		var length = size(queue);	
 		for (var i=0; i<length-1;i++){
 			str = str + queue[i] + " - ";
 		} 		 		
 		str = str + queue[i]; 		
 	} 	
 	return str;
 } 

