//ok
"use strict";
var arr = ['j', 'a', 'c', 'q', 'z', 'i'];
var tmp = 0;
var n = arr.length;

for(var i = 0; i < arr.length; i++){
	
	for(var j = arr.length - 1; j > i; j--){
				if(arr[j].charCodeAt(0) <= arr[i].charCodeAt(0)){
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
				
				};
				if (arr[j].charCodeAt(0) == 122){
					var z = arr[j];
					var arr1 = arr.slice(0, j);
					arr1.unshift(z);
				};
		
	}
}
console.log(arr);
console.log(arr1);


/*)) есть массив строк ['j', 'a', 'c', 'q', 'z', 'i'] 
расположи их по алфавиту, но с исключением: 
'z' должна всегда быть в самом начале массива*/

