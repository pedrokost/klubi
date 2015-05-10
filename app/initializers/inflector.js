import Ember from "ember";

export function initialize() {
  var inflector = Ember.Inflector.inflector;
  inflector.irregular('clanek', 'clanki');
}

export default {
  name: 'inflector',
  initialize: initialize
};
