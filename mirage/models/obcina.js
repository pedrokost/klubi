import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  klubs: hasMany(),
  neighbouringObcinas: hasMany("obcina")
});
