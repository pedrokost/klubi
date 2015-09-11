import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['klub-card'],

  hasFamily: Ember.computed.gt('family.length', 1),

  cardType: Ember.computed('hasFamily', function() {
    if (this.get('hasFamily')) {
      return 'klub-card-with-branches';
    } else {
      return 'klub-card';
    }
  }),

  family: Ember.computed('klub', 'klub.parent', 'klub.branches', function() {('')
    let klub = this.get('klub');
    let family = Ember.A([klub]);
    if (klub.get('parent.content')) {
      family.pushObject(klub.get('parent.content'));
    }
    if (klub.get('branches.length')) {
      klub.get('branches').forEach(function(b) {
        family.pushObject(b);
      });
    }

    return family;
  }),
});
