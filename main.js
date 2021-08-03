console.log("Console test");
var list = [];
console.log("Should show zero: " + list.length);
function submit(){
    var nameone = document.getElementById("itemone").value;
    var nametwo = document.getElementById("itemtwo").value;
    var namethree = document.getElementById("itemthree").value;
    var namefour = document.getElementById("itemfour").value;
    list.push(nameone);
    list.push(nametwo);
    list.push(namethree);
    list.push(namefour);
    console.log(list);
    document.getElementById("show").innerHTML = list;
    document.getElementById("submitb").style.display = "none";
    document.getElementById("sortb").style.display = "inline-block";
}
function sort(){
    list.sort();
    console.log(list);
    document.getElementById("show").innerHTML = list;
}