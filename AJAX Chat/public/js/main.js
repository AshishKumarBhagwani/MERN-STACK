var DATA=[];
var request = new XMLHttpRequest();
function addTodo(){
  var inputText=document.getElementById('input');
  DATA.push(inputText.vale);
  inputText.value = " ";
  save();
}
function save(){
  request.open("POST", "https://nodedatastore.herokuapp.com/ashish");
  request.setRequestHeader("Content-Type","application/json");
  request.send(JSON.stringify(DATA));
}

//Steps
//1. Create an XML Http Request variable.

//var request = new XMLHttpRequest();

//Sending Info to server.
//request.open("POST","https://nodedatastore.herokuapp.com/sumair"); //Send Request type
//request.setRequestHeader("Content-Type","application/json"); //What data should you expect from me.
//request.send(
  //JSON.stringify({
    //name: "Sumair",
    //education:"Software",
    //work:"business"
  //})
//)

//Fetch information from Server
//request.open("GET","https://nodedatastore.herokuapp.com/sumair");
//request.onload = function(){
  //var data = JSON.parse(request.responseText);
  //var container = document.getElementById('container');
  //container.innerHTML += "<h3>Name:" + data.name + "<br>Education: "+data.education+"<br>Work: "+data.work+"</h3>"
//}

//request.send();











//
