function destroyer(arr) {
    let argArray = [...arguments] //Converts the arguments to a nested array
    return arr.filter(word => 
        !argArray.includes(word));
  }
  
  console.log ("Test Case1: " + destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //should return [1, 1]
  console.log ("Test Case2: " + destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));// should return [1, 5, 1]
  console.log ("Test Case3: " + destroyer([3, 5, 1, 2, 2], 2, 3, 5));// should return [1]
  console.log ("Test Case4: " + destroyer([2, 3, 2, 3], 2, 3));// should return [].
  console.log ("Test Case5: " + destroyer(["tree", "hamburger", 53], "tree", 53));// should return ["hamburger"].
  console.log ("Test Case6: " + destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));// should return [12,92,65].