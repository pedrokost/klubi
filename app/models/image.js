import DS from "ember-data";
import attr from "ember-data/attr";
import { belongsTo } from "ember-data/relationships";

export default DS.Model.extend({
  type: attr("string"),
  klub: belongsTo("klub"),
  thumbnail: attr(),
  large: attr()
});
