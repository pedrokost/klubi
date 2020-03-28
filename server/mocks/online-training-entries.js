ENTRIES =  [{
  type: 'online-training-entries',
  id: 1,
  attributes: {
    'title': '3x tedenski 40min voden trening',
    'brief': 'Ostani z nami, ostani z nami do jutraaa!',
    'description': 'nearoseitnarostenraiosetnrioasentarioestn',
    'is_priced': true,
    'organizer': 'Legionar klub Ljubljana',
    'categories': ['fitnes']
  }
},
{
  type: 'online-training-entries',
  id: 2,
  attributes: {
    'title': '2x dnevni izziv - noge, jedro, roke',
    'brief': 'Ostani z nami, ostani z nami do jutraaa!',
    'description': 'nearoseitnarostenraiosetnrioasentarioestn',
    'is_priced': false,
    'organizer': 'Legionar klub Ljubljana',
    'categories': ['fitnes']
  }
}];


function findKlubById (id) {
  return KLUBS.filter(function(k) {
    return k.id === id;
  })[0];
}

module.exports = function(app) {
  'use strict';
  var express = require('express');
  var entriesRouter = express.Router();

  // entriesRouter.post('/', function(req, res) {
  //   // let data = req;
  //   // console.log(req.body)
  //   // data.data.id = '' + Math.random() * 99999999999999;
  //   res.status(201).json({ "data": findKlubById('fitnes-1') } );
  // });

  entriesRouter.get('/', function(req, res) {
    var klubs = KLUBS.filter(function(klub) {
      return klub.attributes.categories.indexOf(req.query.category) >= 0;
    });
    res.send({ "data": klubs });
  });

  entriesRouter.get('/:id', function(req, res) {
    res.send({ 'data': findKlubById(req.params.id) });
  });

  // entriesRouter.patch('/:id', function(req, res) {
  //   res.status(204).json(null);
  // });

  app.use('/api/online-training-entries', entriesRouter);
};
