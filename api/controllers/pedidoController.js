'use strict';

var util = require('util');

var prodList = { items: [] }
var lista = prodList.items;

module.exports = {
  IDGET: get,
  IDGETBYID: getById,
  IDPOST: post,
  IDPUT: put,
  IDDELETE: del
};

// function hello(req, res) {
//   //variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
//   var name = req.swagger.params.name.value || 'stranger';
//   var hello = util.format('Hellouu, %s!', name);
//   res.json(hello);
// }

function get(req, res) {
  res.json(lista);
  //res.json('GET funcionou!');
}
function getById(req, res) {
  res.json("GetById funcionou");
}
function post(req, res) {
  prodList.items.push(req.body)
  res.json('Produto criado!');
  console.log(lista);
}
function put(req, res) {
  res.json("Put funcionou bem");
}
function del(req, res) {
  res.json("del funcionou");
}
