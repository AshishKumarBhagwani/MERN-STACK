var DATA = [];
var request = new XMLHttpRequest();
load();


function render(){
  $("#container").html('');
  for(var i in DATA){
    var identity = '';
    var str = DATA[i].title;
    for(var j=0; j <= str.length; j++){
      if( str.charAt(j) !== ' ' ){
        identity += str.charAt(j);
          //console.log(identity);
      }
  }

    $('#container').append(
    ""+
    "<div class = list id = "+identity+" onclick = 'clickMe(this.id)'> " +
    "<div class = row>"+
    "<div class = col-md-2> <img src = "+ DATA[i].image +" ></div>"+
    "<div class = col-md-8>"+
    "<div class = row><div class = col-md-12><p> Title: "+DATA[i].title+"</p></div></div>"+
    "<div class = row><div class = col-md-12><p> Artist: "+DATA[i].artist+"</p></div></div>"+
    "<div class = row><div class = col-md-12>  <a href = "+DATA[i].url+"><button class = btn >Buy This Song</button></a></div></div>"+
    "</div></div></div><br>" );

  }
  // $('.list').on('click',function(){
  //   //window.location.href = 'page.html';
  // });
}

function clickMe(Id){
  window.location.href = 'page.html#'+Id;
  //console.log(Id);
  //alert('Yes i am working');

}

function load(){
  $.get("http://rallycoding.herokuapp.com/api/music_albums",function(response){
    if(DATA == ''){
      DATA = response;
    }
    render();
  });
}
