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
        facebook_url: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
        phone:  '031 231 440',
        slug: 'sankukai-karate-klub-grosuplje',
        categories: ['karate']
      },
      {
        id: 2,
        name: 'Sankukai karate klub Kamnik',
        address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
        town: 'Kamnik',
        latitude: 46.2214969,
        longitude: 14.6066272,
        website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
        facebook_url: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
        email: 'info@sankukai.org',
        phone:  '031 231 440',
        slug: 'sankukai-karate-klub-Kamnik',
        categories: ['karate']
      }
    ];
    if (req.query.category === 'fitnes') {
      for (var i = 0; i < Math.random() * 105 + 5; i++) {
        klubs.push({
          id: 2 + i,
          name: req.query.category + ' ' +  i,
          address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
          town: 'Kamnik',
          latitude: 46.122 + Math.random() * 1.2 - 0.6,
          longitude: 14.815 + Math.random() * 3 - 1.5,
          website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
          email: 'info@sankukai.org',
          phone:  '031 231 440',
          slug: 'karate-' + i,
          categories: [req.query.category]
        });
      }
    }

    if (req.query.category === 'gimnastika') {
      for (var i = 20; i < Math.random() * 15 + 5; i++) {
        klubs.push({
          id: 2 + i,
          name: req.query.category + ' ' +  i,
          address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
          town: 'Kamnik',
          latitude: 46.122 + Math.random() * 1.2 - 0.6,
          longitude: 14.815 + Math.random() * 3 - 1.5,
          website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
          email: 'info@sankukai.org',
          phone:  '031 231 440',
          slug: 'karate-' + i,
          categories: [req.query.category]
        });
      }
    }

    res.send({'klubs': klubs});
  });
  app.use('/api/klubs', klubsRouter);
};
