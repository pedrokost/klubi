import Inflector from "ember-inflector";

export function initialize() {
  var inflector = Inflector.inflector;
  inflector.irregular("clanek", "clanki");
  inflector.irregular("online-training-entry", "online-training-entries");
}

export default {
  name: "inflector",
  initialize: initialize
};
