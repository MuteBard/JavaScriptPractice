function hello(name){

  if (name === null){
    console.log("hello world");
    document.write("hello world");
  }else{
    console.log("hello "+name);
    document.write("hello "+name);
  }
}

//var name =  prompt("Enter a name: ");
var name;
hello(name);
