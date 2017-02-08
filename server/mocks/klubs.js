KLUBS = [
  {
    "type": "klubs",
    "id": 'sankukai-karate-klub-grosuplje-2',
    "attributes": {
      name: 'Sankukai karate klub Grosuplje 2',
      address: 'Nova OŠ Luis Adamič, Tovarniška 14, Grosuplje',
      town: 'Grosuplje',
      latitude: 45.9557645,
      longitude: 14.658899,
      website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
      email: 'info@sankukai.org',
      facebook_url: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
      phone:  '031 231 440',
      categories: ['karate']
    },
    "relationships": {
      "parent": {
        "data": {
          "type": "klubs",
          "id": 'sankukai-karate-klub-grosuplje'
        }
      }
    }
  },
  {
    "type": "klubs",
    "id": 'sankukai-karate-klub-kamnik',
    "attributes": {
      name: 'Sankukai karate klub Kamnik',
      address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
      town: 'Kamnik',
      latitude: 46.2214969,
      longitude: 14.6066272,
      website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
      facebook_url: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
      email: 'info@sankukai.org',
      phone:  '031 231 440',
      categories: ['karate']
    },
    "relationships": {
      "parent": {
        "data": {
          "type": "klubs",
          "id": 'sankukai-karate-klub-grosuplje'
        }
      }
    }
  },
  {
    "type": "klubs",
    "id": 'sankukai-karate-klub-grosuplje',
    "attributes": {
      name: 'Sankukai karate klub Grosuplje',
      address: 'Nova OŠ Luis Adamič, Tovarniška 14, Grosuplje',
      town: 'Grosuplje',
      latitude: 45.9557645,
      longitude: 14.658899,
      website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
      email: 'info@sankukai.org',
      facebook_url: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
      phone:  '031 231 440',
      categories: ['karate']
    },
    "relationships": {
      "parent": {
        "data": null
      }
    }
  },
  {
    "type": "klubs",
    "id": 'mocky-mocky',
    "attributes": {
      name: 'Mocky mocky',
      address: 'Nova OŠ Luis Adamič, Tovarniška 14, Grosuplje',
      town: 'Grosuplje',
      latitude: 45.9557645,
      longitude: 14.658899,
      website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
      email: 'info@sankukai.org',
      facebook_url: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubgrosuplje',
      phone:  '031 231 440',
      categories: ['arena', 'trx', 'karate'],
    },
    "relationships": {
      "parent": {
        "data": null
      }
    }
  },
  {
    "type": "klubs",
    "id": 'joga-123',
    "attributes": {
      name: 'Joga Joga',
      address: 'Nova OŠ Luis Adamič, Tovarniška 14, Grosuplje',
      town: 'Grosuplje',
      latitude: 45.9557645,
      longitude: 14.658899,
      website: 'http://www.joga.org',
      email: 'info@sankukai.org',
      facebook_url: 'http://www.sankukai.org/joga',
      phone:  '031 342 440',
      categories: ['joga'],
    },
    "relationships": {
      "parent": {
        "data": null
      }
    }
  }
];

var quantity;
quantity = 400 + 5;
for (var i = 0; i < quantity; i++) {
  var klub = createKlubById('fitnes', i);
  if (Math.random() > 0.3) {
    klub.attributes.categories = ['pilates', 'vadba za starejse'].concat(klub.attributes.categories);
  }
  KLUBS.push(klub);
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
quantity = Math.random() * 30;
for (var i = 0; i < quantity; i++) {
  KLUBS.push(createKlubById('cheerleading', i));
}


function createKlubById (category, id) {
  return {
    "type": "klubs",
    "id": `${category}-${id}`,
    "attributes": {
      name: `${category} ${id}`,
      address: 'OŠ Toma Brejca, Šutna 39, 1241 Kamnik',
      town: 'Kamnik',
      latitude: 46.122 + Math.random() * 1.2 - 0.6,
      longitude: 14.815 + Math.random() * 3 - 1.5,
      website: 'http://www.sankukai.org/index.php/sankukai-karate-klubi/karateklubkamnik',
      email: 'info@sankukai.org',
      phone:  '031 231 440',
      categories: [category]
    },
    "relationships": {
      "parent": {
        "data": null
      }
    }
  }
}

function findKlubById (id) {
  // var category = slug.split("-")[0];
  // var id = slug.split("-")[1];
  return KLUBS.filter(function(k) {
    return k.id === id;
  })[0];
  // return createKlubById(category, id);
}

module.exports = function(app) {
  'use strict';
  var express = require('express');
  var klubsRouter = express.Router();

  klubsRouter.post('/', function(req, res) {
    // let data = req;
    // console.log(req.body)
    // data.data.id = '' + Math.random() * 99999999999999;
    res.status(201).json({ "data": findKlubById('fitnes-1') } );
  });

  klubsRouter.get('/', function(req, res) {
    var klubs = KLUBS.filter(function(klub) {
      return klub.attributes.categories.indexOf(req.query.category) >= 0;
    });
    res.send({ "data": klubs });
  });

  klubsRouter.get('/:id', function(req, res) {
    res.send({ 'data': findKlubById(req.params.id) });
  });

  klubsRouter.patch('/:id', function(req, res) {
    res.status(204).json(null);
  });

  app.use('/api/klubs', klubsRouter);
};
