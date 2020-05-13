function sumAll(arr) {
    let min = Math.min(...arr), 
    max = Math.max(...arr), sum=0;
    while (min<=max){
      sum += min++
    }
    return sum;
  }  
  console.log(sumAll([1, 4]));

//   FCC Solution 1
  function sumAll1(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
      temp += i;
    }
    return temp;
  }
  
  sumAll([1, 4]);

  
//   FCC Solution II
const sumAll2 = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };