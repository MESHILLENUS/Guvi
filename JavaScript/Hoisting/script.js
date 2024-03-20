// Hoisting
// console.log(a)
// var a=15;  // pass agum error throw pannathu coz global 
// console.log(a);

// console.log(b);
// let b=15;  // error throw pannum bcoz ithu lexical script (let const )
// console.log(b);

//  ARRAYS AND OBJECTS
let arr= ["sanjay",1,true,{pos: "Mentor",value : 5},[2,5] ]
console.log (arr[3])

//objects (JSON-javascript objects notation)

//key and values

let obj= {
    name:"sanjay",
    age:15,
    id:2,
    posArr: ["sanjay",1,true],
    demObj:{
        pos:"mentor",
        id:5
    }

};
//dot operrat
console.log(obj.demObj.id);

//map operations

console.log (obj["age"]);


let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data[0]);
};
const dummyJson = {
  name: "sanjay",
};

const strJson = JSON.stringify(dummyJson);
console.log(dummyJson); //{name : "sanjay"}
console.log(strJson); //"{name: 'sanjay'}"
const convJson = JSON.parse(strJson);
console.log(convJson); //{name : "sanjay"}
