import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import { hasMany, belongsTo } from 'ember-data/relationships'

/* globals Ember */

export default Model.extend({
  name: attr('string'),
  address: attr('string'),
  town: attr('string'),
  latitude: attr('number'),
  longitude: attr('number'),
  website: attr('string'),
  facebookUrl: attr('string'),
  phone: attr('string'),
  email: attr('string'),
  categories: attr('array'),
  parent: belongsTo('klub', { inverse: 'branches', async: true }),
  branches: hasMany('klub', { inverse: 'parent', async: true }),
  notes: attr('string'),
  editor: attr('string'),

  location: Ember.computed('latitude', 'longitude', function () {
    return [this.get('latitude'), this.get('longitude')]
  })
})
