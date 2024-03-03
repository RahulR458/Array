// 1. Write a program to count the total number of duplicate elements in an array.

let arr = [1, 2, 3, 4, 1, 8, 9, 2, 3, 1, 1, 1];
    let count = 0;
    let occurrences = [];

    for (let i = 0; i < arr.length; i++) {
        if (occurrences[arr[i]] === undefined) {
            occurrences[arr[i]] = -1;
        } else {
            if (occurrences[arr[i]] === -1) {
                count++;
            }
            occurrences[arr[i]]++;
        }
    }
console.log(`Total number of duplicate elements: ${count}`);
console.log(occurrences);