import DS from "ember-data";
import attr from "ember-data/attr";
import { belongsTo } from "ember-data/relationships";

export default DS.Model.extend({
  body: attr("string"),
  commenterName: attr("string"),
  klub: belongsTo("klub"),
  requestHash: attr("string")
});
