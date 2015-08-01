import DS from 'ember-data';
import config from '../config/environment';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: config.host,
  // namespace: 'v2'
  // TODO: add accept header
  headers: {
    'Accept': 'application/vnd.zatresi.v1'
    // TODO: add API_KEY
  },
  shouldBackgroundReloadRecord() {
    return true;
  },
  shouldReloadAll() {
    return true; //non-Ember 2 default
  }
});
