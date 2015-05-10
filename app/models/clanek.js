import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  source: DS.attr('string'),
  category: DS.attr('string'),
  publishedAt: DS.attr('date'),
  imageUrl: DS.attr('string'),
  url: DS.attr('string')
});
