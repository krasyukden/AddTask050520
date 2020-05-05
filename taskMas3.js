"use strict";

var arr = ["cyan", "green", "red"];

var a = arr.reverse();
for(var i = 0; i < a.length; i++){// раб
	a[i] = a[i].toUpperCase().split("").reverse().join("");
}
//a.forEach( (value) => value.toUpperCase().split("").reverse().join(""));//  не работ !!!

console.log(a);

// Преврати массив ["cyan", "green", "red"] в 
//["DER", "NEERG", "NAYC"].