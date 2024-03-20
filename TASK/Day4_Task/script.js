//ANNONYUMS FUNCTION
//print odd no in an array;
let oddNum = function(arr)
{
    for(let i=0;i<=arr.length;i++){
        if (arr[i] %2 !=0 ){
            console.log(arr[i]);
        }
    }
}
oddNum([1,2,3,4,5,6,7,8])

//Convert all the strings to title caps in a string array
let strings = ["hello", "world", "javascript"];

(function(arr) {
    let titleCapsArray = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(titleCapsArray);
})(strings);

//Sum of all numbers in an array:
let soaniaa= [1, 2, 3, 4, 5];

(function(arr) {
    let sum = arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    console.log(sum);
})(soaniaa);

//Return all the prime numbers in an array:
 ratpniar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    let primes = arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    console.log(primes);
})(ratpniar);

//Return all the palindromes in an array:
let ratpiaa = ["hello", "level", "world", "racecar"];

(function(arr) {
    let palindromes = arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
    console.log(palindromes);
})(ratpiaa);

//Return median of two sorted arrays of the same size:
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

(function(a1, a2) {
    let mergedArray = a1.concat(a2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    let len = mergedArray.length;
    if (len % 2 === 0) {
        console.log((mergedArray[len / 2 - 1] + mergedArray[len / 2]) / 2);
    } else {
        console.log(mergedArray[Math.floor(len / 2)]);
    }
})(arr1, arr2);

//Remove duplicates from an array:
let rdfaa = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7];

(function(arr) {
    let uniqueNumbers = arr.filter(function(item, index, array) {
        return array.indexOf(item) === index;
    });
    console.log(uniqueNumbers);
})(rdfaa);

//Rotate an array by k times:
let raabkt = [1, 2, 3, 4, 5];
let k = 2;

(function(arr, k) {
    let len = arr.length;
    k = k % len; // Adjust k in case it's larger than array length
    let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray);
})(raabkt, k);

//      IIFE

//Print odd numbers in an array:
let aainop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})(aainop);

//Convert all the strings to title caps in a string array:
let asaicttstac = ["hello", "world", "javascript"];

(function(arr) {
    let titleCapsArray = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(titleCapsArray);
}(asaicttstac));

//Sum of all numbers in an array:
let aainaos = [1, 2, 3, 4, 5];

(function(arr) {
    let sum = arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    console.log(sum);
})(aainaos);

//Return all the prime numbers in an array:
let aainptar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    let primes = arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    console.log(primes);
})(aainptar);

//Return all the palindromes in an array:
let aaipar = ["hello", "level", "world", "racecar"];

(function(arr) {
    let palindromes = arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
    console.log(palindromes);
})(aaipar);

//Return median of two sorted arrays of the same size:
let q = [1, 3, 5];
let p = [2, 4, 6];

(function(a1, a2) {
    let mergedArray = a1.concat(a2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    let len = mergedArray.length;
    if (len % 2 === 0) {
        console.log((mergedArray[len / 2 - 1] + mergedArray[len / 2]) / 2);
    } else {
        console.log(mergedArray[Math.floor(len / 2)]);
    }
})(q, p);
//Remove duplicates from an array:
let aafdr = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7];

(function(arr) {
    let uniqueNumbers = arr.filter(function(item, index, array) {
        return array.indexOf(item) === index;
    });
    console.log(uniqueNumbers);
})(aafdr);

//Rotate an array by l times:

let tkbaar = [1, 2, 3, 4, 5];
let l = 2;

(function(arr, k) {
    let len = arr.length;
    l = l % len; // Adjust l in case it's larger than array length
    let rotatedArray = arr.slice(l).concat(arr.slice(0, l));
    console.log(rotatedArray);
})(tkbaar, l);


// ARROW FUNCTION

//Print odd numbers in an array:
let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(A);

//Convert all the strings to title caps in a string array:
let B = ["hello", "world", "javascript"];

let convertToTitleCaps = arr => {
    let titleCapsArray = arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(titleCapsArray);
};

convertToTitleCaps(B);

//Sum of all numbers in an array:
let C = [1, 2, 3, 4, 5];

let sumOfNumbers = arr => {
    let sum = arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    console.log(sum);
};

sumOfNumbers(C);

//Return all the prime numbers in an array:
let D = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let getPrimeNumbers = arr => {
    let primes = arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    console.log(primes);
};

getPrimeNumbers(D);

//Return all the palindromes in an array:

let E = ["hello", "level", "world", "racecar"];

let getPalindromes = arr => {
    let palindromes = arr.filter(str => {
        return str === str.split('').reverse().join('');
    });
    console.log(palindromes);
};

getPalindromes(E);
















