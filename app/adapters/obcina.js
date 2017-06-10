import ApplicationAdapter from "./application";

export default ApplicationAdapter.extend({
  findRecord: function(store, type, id, snapshot) {
    if (snapshot.adapterOptions) {
      let url = this.buildURL(type.modelName, id, snapshot, "findRecord");
      let query = {
        category: Ember.get(snapshot.adapterOptions, "category")
      };
      return this.ajax(url, "GET", { data: query });
    } else {
      return this._super(...arguments);
    }
  }
});
