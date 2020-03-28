import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { alias } from '@ember/object/computed';

export default Controller.extend({
  entries: alias('model'),
});
