# Solution to the Intermediate Algorithm Scripting Challenges in FCC
The following challenges are part of FCC's Intermediate Algorithm Scripting Challenges. These should prepare you to complete the final challenges for the JavaScript Algorithms And Data Structures Certification.

These challenges will allow you to test how much you have learned and which parts you may need to review again before starting the projects.

# Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. https://github.com/InfoTechDrive/Intermediate-Algorithm-Scripting/blob/master/Sum%20All%20Numbers%20in%20a%20Range.js

# Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays in any other.

Test case: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
Solution: https://github.com/InfoTechDrive/Intermediate-Algorithm-Scripting/blob/master/DiffTwoArrays.js

# Seek and Destroy
Remove all elements from the initial array that are of the same value as these arguments. Note: You have to use the arguments object.

Test cases: 
    destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
    destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
    destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]
Solution: ttps://github.com/InfoTechDrive/Intermediate-Algorithm-Scripting/blob/master/seekAndDestroy.js