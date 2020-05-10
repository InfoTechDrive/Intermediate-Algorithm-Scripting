function sumAll(arr) {
    let min = Math.min(...arr)
    console.log(min)
    let max = Math.max(...arr)
    console.log(max)
    let sum=0;
    while (min<=max){
      sum += min++
    }
    console.log(sum)
    return sum;
  }
  
  sumAll([1, 4]);
  sumAll([5, 10]);