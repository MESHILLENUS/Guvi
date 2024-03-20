// DATA TYPES

//PRIMITIVE DATA TYPES 

//NUMBER ->
    console.log(typeof 5) // int or float
//  string->
    console.log(typeof "5") //to show string u should use " "
// Boolean->
    console.log(typeof true) // true or false 

//NON - PRIMITIVE 
let arr=[1,2,3,45,6]
console.log(typeof arr,arr ); //Array

let obj ={1: "1"}       // objects
console.log(typeof obj,obj);

let a=10
let b=a
console.log(a)
console.log(b)

b=15

console.log(a)
console.log(b)

//NON PRIMITIVE (arr,obj)

let sam_arr=[1,2,3]
let sam_arr2= sam_arr;

console.log(sam_arr)    //[1,2,3]
console.log(sam_arr2)   //[1,2,3]

sam_arr2[1] = 4;
console.log(sam_arr)    //[1,4,3]
console.log(sam_arr2)   //[1,4,3]


// DEEP COPY (ARRAY WITH COPY BY VALUE)

let ano_arr = [5,6,7]
let ano_arr2= Object.assign([],ano_arr);

console.log (ano_arr);//[5,6,7]
console.log (ano_arr2);//[5,6,7]

ano_arr2[1]=8;
console.log (ano_arr);   //[5,6,7]
console.log (ano_arr2);  //[5,8,7]


