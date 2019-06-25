var express = require('express');
var app = express();


var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {id:1, title:"Kurti",description:"College wear",quantity:100, unitprice:800},
    {id:2, title:"Sarees",description:"Party wear",quantity:150, unitprice:1200},
	{id:3, title:"Jumsuit",description:"Normal wear",quantity:110, unitprice:1000},
	{id:4, title:"Shirts",description:"Casuals",quantity:1350, unitprice:1200},
	{id:5, title:"Jeans",description:"Casuals",quantity:140, unitprice:1600}
    
  ];
  res.send(products);
};


app.get ('/products',productController);
var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8080", host, port)
})