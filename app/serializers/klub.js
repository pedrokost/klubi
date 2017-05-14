import DS from "ember-data";
import EmbeddedJSONapiRecordsMixin from "../mixins/embedded-jsonapi-records";

export default DS.JSONAPISerializer.extend(
  DS.EmbeddedRecordsMixin,
  EmbeddedJSONapiRecordsMixin,
  {
    attrs: {
      branches: {
        serialize: "relationship-records"
      },
      parent: { serialize: false }
    }
  }
);
