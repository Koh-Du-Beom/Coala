let array = [5,4,3,2,1];
const min = Math.min(...array);
console.log(array.indexOf(min) + 1);

array[4] = 3;
const min2 = Math.min(...array);
console.log(array.indexOf(min2) + 1);

