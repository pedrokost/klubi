module.exports = function(app) {
  'use strict';
  var express = require('express');
  var klubsRouter = express.Router();
  klubsRouter.get('/', function(req, res) {
    var klubs = [
      {
        id: 1,
        name: 'Sankukai karate klub Grosuplje',
        address: 'Nova OŠ Luis Adamič, Tovarniška 14, Grosuplje',
        town: 'Grosuplje',
        latitude: 45.9557645,
        longitude: 14.658899,
        website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
        email: 'info@sankukai.org',
        phone:  '031 231 440',
        slug: 'sankukai-karate-klub-grosuplje'
      },
      {
        id: 2,
        name: 'Sankukai karate klub Kamnik',
        address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
        town: 'Kamnik',
        latitude: 46.2214969,
        longitude: 14.6066272,
        website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
        email: 'info@sankukai.org',
        phone:  '031 231 440',
        slug: 'sankukai-karate-klub-Kamnik'
      }
    ];
    for (var i = 0; i < 100; i++) {
      klubs.push({
        id: 2 + i,
        name: 'Karate ' + i,
        address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
        town: 'Kamnik',
        latitude: 46.122 + Math.random() * 1.2 - 0.6,
        longitude: 14.815 + Math.random() * 3 - 1.5,
        website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
        email: 'info@sankukai.org',
        phone:  '031 231 440',
        slug: 'karate-' + i
      });
    }

    res.send({'klubs': klubs});
  });
  app.use('/api/klubs', klubsRouter);
};
