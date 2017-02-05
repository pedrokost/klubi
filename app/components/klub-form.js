import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'klub-form',
  formattedAddress: null,

  actions: {
    save() {
      if (this.get('formattedAddress')) {
        this.get('klub').set('address', this.get('formattedAddress'));
      }
      this.sendAction('submit')
    },
    setAddressAttrs(latitude, longitude, formattedAddress, town) {
      this.get('klub').setProperties({latitude, longitude, town});
      this.setProperties({formattedAddress});
    }
  }
});
