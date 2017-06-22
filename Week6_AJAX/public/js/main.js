var DATA = [];
var request = new XMLHttpRequest();
load();

function addTodo(){
  var inputText = document.getElementById('input');
  DATA.push(inputText.value);
  showHTML();
  save();
}

function showHTML(){
  var container = document.getElementById('container');
  container.innerHTML = '';
  for(var i in DATA){
    container.innerHTML += "<div id="+i+"><input onclick='removeTodo(this.parentNode.id)' type='checkbox'/><label>"+DATA[i]+"</label></div>";
  }

  var inputText = document.getElementById('input');
  inputText.value = '';
}

function save(){
  request.open("POST","https://nodedatastore.herokuapp.com/cichub");
  request.setRequestHeader("Content-Type","application/json");
  request.send(JSON.stringify(DATA));
}

function load(){
  request.open("GET","https://nodedatastore.herokuapp.com/cichub");
  request.onload = function(){
    if(DATA == ''){
      DATA = JSON.parse(request.responseText);
    }
    showHTML();
  }
  request.send();
}

function removeTodo(Id){
  var listDiv = document.getElementById(Id);
  listDiv.parentNode.removeChild(listDiv);

  //Remove Item from Array
  //Use IndexOf to target Array Index
  var dataIndex = DATA.indexOf(listDiv.childNodes[1].innerText);
  DATA.splice(dataIndex,1);
  save();
}
