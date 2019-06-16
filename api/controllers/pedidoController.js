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
  let param_id = JSON.stringify(req.swagger.params.pedidoID.value);

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id == param_id) {
      let zlista = JSON.stringify(lista[i]);
      res.json(zlista);
    }
  }
}

function post(req, res) {
  prodList.items.push(req.body)
  res.json('Produto criado!');
  //console.log(lista);
}

function put(req, res) {
  let param_id = JSON.stringify(req.swagger.params.pedidoID.value);
  let param_body = req.body;

res.json("id: "+ param_id + " body: "+param_body);

  // for (let x = 0; x < lista.length; x++) {
  //   if (lista[x].id == param_id) {
  //     if (param_body.tipo != undefined) {
  //       lista[x].tipo = param_body.tipo;
  //     }
  //     if (param_body.nome != undefined) {
  //       lista[x].modelo = param_body.modelo;
  //     }
  //     if (param_body.fabricante != undefined) {
  //       lista[x].fabricante = param_body.fabricante;
  //     }
  //     if (param_body.descricao != undefined) {
  //       lista[x].descricao = param_body.descricao;
  //     }

  //     res.json('Produto atualizado!');
  //   }
  // }
}

function del(req, res) {
  let zreq = JSON.parse(req.swagger.params.pedidoID.value);

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === zreq) {
      lista.splice(i, 1);
      i--;
      res.json('Produto excluído!');
    }
  }
}