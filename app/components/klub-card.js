import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['klub-card-inner js-klub-card'],
  attributeBindings: ['klubId:data-id']
});
