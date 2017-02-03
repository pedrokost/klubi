import DS from 'ember-data';
import config from '../config/environment';
// import ActiveModelAdapter from 'active-model-adapter';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: config.host,
  // namespace: 'v2'
  // TODO: add accept header
  headers: {
    'Accept': 'application/vnd.klubi.v2+json'
    // TODO: add API_KEY
  },
  shouldBackgroundReloadRecord() {
    return true;
  },
  shouldReloadAll() {
    return true; //non-Ember 2 default
  }
});
