import { Model, belongsTo, hasMany } from "ember-cli-mirage";

export default Model.extend({
  obcina: belongsTo(),
  comments: hasMany()
});
