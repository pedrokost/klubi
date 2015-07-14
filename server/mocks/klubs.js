
KLUBS = [
  {
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
    name: 'Sankukai karate klub Grosuplje 2',
    address: 'Nova OŠ Luis Adamič, Tovarniška 14, Grosuplje',
    town: 'Grosuplje',
    latitude: 45.9557645,
    longitude: 14.658899,
    website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
    email: 'info@sankukai.org',
    facebook_url: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
    phone:  '031 231 440',
    slug: 'sankukai-karate-klub-grosuplje-2',
    categories: ['karate']
  },
  {
    name: 'Sankukai karate klub Kamnik',
    address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
    town: 'Kamnik',
    latitude: 46.2214969,
    longitude: 14.6066272,
    website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
    facebook_url: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
    email: 'info@sankukai.org',
    phone:  '031 231 440',
    slug: 'sankukai-karate-klub-kamnik',
    categories: ['karate']
  }
];

var quantity;
quantity = Math.random() * 105 + 5;
for (var i = 0; i < quantity; i++) {
  KLUBS.push(createKlubById('fitnes', i));
}
quantity = 0;
for (var i = 0; i < quantity; i++) {
  KLUBS.push(createKlubById('frisbi', i));
}
quantity = Math.random() * 12 + 1;
for (var i = 0; i < quantity; i++) {
  KLUBS.push(createKlubById('karate', i));
}
quantity = Math.random() * 60;
for (var i = 0; i < quantity; i++) {
  KLUBS.push(createKlubById('wellness', i));
}



function createKlubById (category, id) {
  return {
    name: category + ' ' +  id,
    address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
    town: 'Kamnik',
    latitude: 46.122 + Math.random() * 1.2 - 0.6,
    longitude: 14.815 + Math.random() * 3 - 1.5,
    website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
    email: 'info@sankukai.org',
    phone:  '031 231 440',
    slug: category + "-" + id,
    categories: [category]
  }
}

function findKlubBySlug (slug) {
  var category = slug.split("-")[0];
  var id = slug.split("-")[1];
  return KLUBS.filter(function(k) {
    return k.slug === slug;
  })[0];
  // return createKlubById(category, id);
}

module.exports = function(app) {
  'use strict';
  var express = require('express');
  var klubsRouter = express.Router();

  klubsRouter.post('/', function(req, res) {
    res.status(201).json({});
  });

  klubsRouter.get('/', function(req, res) {
    var klubs = KLUBS.filter(function(klub) {
      return klub.categories.indexOf(req.query.category) >= 0;
    });
    res.send({'klubs': klubs});
  });

  klubsRouter.get('/:slug', function(req, res) {
    res.send({'klubs': [
        findKlubBySlug(req.params.slug)
      ]
    });
  })

  app.use('/api/klubs', klubsRouter);
};
