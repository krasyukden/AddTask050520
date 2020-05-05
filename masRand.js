// ok
"use strict";

var a = [1, 2, 3, 4, 5, 6, 7, 8];
var arr = [];

while(a.length > 0){	
	var j = Math.floor(Math.random()*10);
		if(0 <= j && j < a.length){
			arr.push(a[j]);
			a.splice(j, 1);
		}	
}

console.log(arr);

//Отсортируй массив в случайном порядке