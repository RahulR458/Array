// 1. Write a program to count the total number of duplicate elements in an array.

// let arr = [1, 2, 3, 4, 1, 8, 9, 2, 3, 1, 1, 1];
//     let count = 0;
//     let occurrences = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (occurrences[arr[i]] === undefined) {
//             occurrences[arr[i]] = -1;
//         } else {
//             if (occurrences[arr[i]] === -1) {
//                 count++;
//             }
//             occurrences[arr[i]]++;
//         }
//     }
// console.log(`Total number of duplicate elements: ${count}`);
// console.log(occurrences);


//_________________________________________________________________________________________________________________________

// 2. Write a program to print all unique elements in an array.

// let arr = [1, 2, 3, 4, 1, 8, 9, 2, 3, 1, 1, 1];

// let  uniqueElements = {};
// for (let el of arr){
//     uniqueElements[el] = true;
// }
// console.log("All Unique Elements : ");
// for (let key in uniqueElements){
//    console.log(key); 
// }

// ------------------------------------------

// let  uniqueSet = new Set(arr);
// console.log("All Unique Elements :");
// // uniqueSet.forEach((val)=>console.log(val));

// ------------------------------------------

// console.log("All Unique Elements :");
// for( let i=0 ; i < arr.length ; i++ ) {
//     for( let j=i ; j < arr.length ; j++){
//         if(arr[i] ===  arr[j] && i !== j) {
//             arr[j] = null;
//         }
//     }
//     if(arr[i] != null){
//         console.log(arr[i]);
//     }
// }


//_________________________________________________________________________________________________________________________
