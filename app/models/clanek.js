import Model from 'ember-data/model'
import attr from 'ember-data/attr'

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  source: attr('string'),
  category: attr('string'),
  publishedAt: attr('date'),
  imageUrl: attr('string'),
  url: attr('string')
})
