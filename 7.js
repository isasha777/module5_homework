arr = [2,1,4,5,6,3,8,9,4,6,5,43,23,56,455];
console.log(arr)
console.log('нечетные числа '+arr.filter(n => n%2 !== 0).length);
console.log('четные числа '+ arr.filter(n => n%2 == 0).length);