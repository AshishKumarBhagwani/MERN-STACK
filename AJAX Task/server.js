const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000,function(err){
  if(err){console.log(err)}
  else{console.log("Server is running on port 3000")}
})
