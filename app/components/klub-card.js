import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['klub-card-inner js-klub-card'],
  attributeBindings: ['klubId:data-id']
});
