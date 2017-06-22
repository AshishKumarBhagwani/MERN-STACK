var DATA = [];
  var inputText;

function addTodo(){
  inputText = document.getElementById('input');
  //check if the text field is empty
  if(inputText.value!==""){
      // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store
        DATA.push(inputText.value);
        localStorage.setItem("allEntries", JSON.stringify(DATA));
        inputText.value = '';
      }
      else {
        document.getElementById("container").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    }
    else {
      alert('Please mention what to add in list!!');
    }
  }

function load(){
  // Retrieve
  document.getElementById("container").innerHTML =" ";
  var obj=JSON.parse(localStorage.getItem("allEntries"));
  for (var i = 0; i < obj.length; i++) {
      document.getElementById("container").innerHTML += "<input type='checkbox'/>"+obj[i]+"<br>";
  }

}
function remove(){
  alert('List will be deleted!!!');
  localStorage.removeItem("allEntries");
  document.getElementById("container").innerHTML =" ";
}
