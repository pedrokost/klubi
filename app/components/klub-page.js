import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['klub_page js-close'],

  isUnverified: Ember.computed('klub.verified', function() {
    // === to avoid geting undefined and showing the warning while the
    // model is being loaded
    return this.get('klub.verified') === false
  }),

  addresses: Ember.computed('klub.address', 'klub.id', 'klub.branches', 'klub.branches.[].address', 'klub.branches.[].id', 'selectedLocation', function() {

    const selectedLocation = this.get('selectedLocation.id')

    // FIXME: mixing design and logic!
    // If there are no branches, then do not color any address blue
    const branchesCount = this.get('klub.branches.length')

    return [{
      address: this.get('klub.address'),
      active: (this.get('klub.id') === selectedLocation) && branchesCount > 0,
      id: this.get('klub.id')
    }].concat(
      this.get('klub.branches').map(function(branch) {
      return {
        address: branch.get('address'),
        active: branch.get('id') === selectedLocation,
        id: branch.get('id')
      }
    }))
  }),

  click(evt) {
    // The purpose of whitelisting the close action is to enable selecting
    // the text on the page to copy it.
    if (evt.target.classList.contains('js-close')) {
      this.sendAction();
    }
  },
});
