module.exports = function(app) {
  'use strict';
  var express = require('express');
  var klubsRouter = express.Router();
  klubsRouter.get('/', function(req, res) {
    res.send({'klubs':[
      {
        id: 1,
        name: 'Sankukai karate klub Grosuplje',
        address: 'Nova OŠ Luis Adamič, Tovarniška 14, Grosuplje',
        website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
        email: 'info@sankukai.org',
        phone:  '031 231 440'
      },
      {
        id: 2,
        name: 'Sankukai karate klub Kamnik',
        address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
        website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
        email: 'info@sankukai.org',
        phone:  '031 231 440'
      }
    ]});
  });
  app.use('/api/klubs', klubsRouter);
};
