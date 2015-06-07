import Ember from 'ember';

var seed = 1;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href', 'target', 'data-image-src'],
  target: '_blank',
  classNames: ['clanek'],
  classNameBindings: ['showBig:clanek-big', 'showImage:clanek-image'],
  href: Ember.computed('clanek.url', function() {
    return this.get('clanek.url');
  }),
  'data-image-src': Ember.computed('clanek.imageUrl', function() {
    return this.get('clanek.imageUrl');
  }),
  showBig: Ember.computed(function() {
    return random() > 0.8;
  }),

  showImage: Ember.computed(function() {
    // return random() > 0.5;
    return true;
  }),

  categoryClass: Ember.computed(function() {
    var category = this.get('clanek.category');
    return 'category-' + category.split(' ')[0];
  })
});
