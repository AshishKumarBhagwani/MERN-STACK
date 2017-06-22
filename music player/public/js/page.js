var DATA = [];
var request = new XMLHttpRequest();
onload();



function render(){
  var id = location.hash;
  id1=id.slice(1,id.length);
  //$('#container2').html();
  for (var i in DATA){
    var identity = '';
    var str = DATA[i].title;
    for(var j=0; j <= str.length; j++){
      if( str.charAt(j) !== ' ' ){
         identity += str.charAt(j);

        }
      }
    if( identity== id1){
      $("#titlediv").append("<h1>"+DATA[i].title+"</h1>");
      $("#container2").append("<div><img src="+DATA[i].image+"></div><a href = "+DATA[i].url+"><button class = btn >Buy This Song</button></a>");
    }
  }
 }

function onload (){
  $.get("http://rallycoding.herokuapp.com/api/music_albums",function(response){
    if(DATA == ''){
      DATA = response;
    }
    render();
  });

  //$("#container2").html($);
}
