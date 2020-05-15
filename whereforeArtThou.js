function whatIsInAName(collection, source) 
{
    let srcKeys = Object.keys(source);
    console.log(srcKeys); 
    return collection.filter((word) => { 
        console.log(word);
        return srcKeys.find((key) => { 
            console.log(key);
            return word.hasOwnProperty(key) && word[key] === source[key]; 
        }); 
    }); 
}
  
  console.log(
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  