import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['klub-address', 'klub_page-item'],
  classNameBindings: ['active'],
  title: 'Prikaži na zemljevidu',
  attributeBindings: ['title'],

  click: function() {
    this.attrs.zoomToLocation(this.get('klubId'))
  }
});
