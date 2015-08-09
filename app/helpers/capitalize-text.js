import Ember from 'ember';

export function capitalize(string) {
  return string[0].capitalize();
}

export default Ember.Helper.helper(capitalize);
