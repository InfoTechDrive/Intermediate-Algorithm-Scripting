function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g,'$1 $2');
    str = str.toLowerCase()
    str = str.split(/(?:_| )+/)
    console.log(str)
    return str.join("-");
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("thisIsSpinalTap");
  spinalCase("The_Andy_Griffith_Show")
  spinalCase("Teletubbies say Eh-oh")
  spinalCase("AllThe-small Things")