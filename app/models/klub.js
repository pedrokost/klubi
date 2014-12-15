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
  email: DS.attr('string')
});
