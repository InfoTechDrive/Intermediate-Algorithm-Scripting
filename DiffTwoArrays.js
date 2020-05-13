
function diffArray(arr1, arr2){
    return arr1
    .filter(word => !arr2.includes(word))
    .concat
    (arr2.filter
        (word=>!arr1.includes(word)));
}


console.log('TEST CASE1: ' + diffArray([1,2], [1,3, 'word', 4]));
console.log('TEST CASE2: ' + diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
console.log('TEST CASE3: ' + diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); 