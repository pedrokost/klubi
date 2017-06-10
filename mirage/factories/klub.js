import { Factory, association } from "ember-cli-mirage";

export default Factory.extend({
  name(i) {
    return `Klub ${i}`;
  },
  town(i) {
    return `Town ${i}`;
  },
  obcina: association()
});
