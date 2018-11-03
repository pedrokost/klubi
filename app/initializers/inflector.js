import Inflector from "ember-inflector";

export function initialize() {
  var inflector = Inflector.inflector;
  inflector.irregular("clanek", "clanki");
}

export default {
  name: "inflector",
  initialize: initialize
};
