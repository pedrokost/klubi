import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: '/api',
  // namespace: 'v2'
});
