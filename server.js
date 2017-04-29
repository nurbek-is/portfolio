'use strict';
const express = require('express');
const app = express ();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');

});

app.post('.data', function (req, res) {
  req.on('data', function (data){
  console.log(data.toString());
  })
  req.on ('end', function() {
    res.send('data received!');
  })
})

app.listen(3000, function() {
  console.log ('server running on port: ')
});
