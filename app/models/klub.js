import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  town: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  website: DS.attr('string'),
  facebookUrl: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  categories: DS.attr('array'),
  parent: DS.belongsTo('klub', { inverse: 'branches', async: true }),
  branches: DS.hasMany('klub', { inverse: 'parent', async: true }),

  isHovered: false,
  location: Ember.computed('latitude', 'longitude', function() {
    return L.latLng(this.get('latitude'), this.get('longitude'));
  })
});
