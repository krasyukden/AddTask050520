"use strict";
// ok
var a = [6,5,4,3,2,1];
var n = a.length;

for(var i = 0; i < n/2; i++){
		var tmp = a[a.length-(i+1)];
		a[a.length-(i+1)] = a[i];
		a[i] = tmp;
	
	
}

console.log(a);//[1, 2, 3, 4, 5, 6];

//Разверни массив (не используя нативный метод .reverse()). 