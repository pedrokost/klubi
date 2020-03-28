import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import Prerenderable from 'klubi/mixins/after-render-prerenderable'
import OnlineTrainingEntry from "klubi/models/online-training-entry";


export default Route.extend(Prerenderable, {
  router: service(),

  model(params, transition) {
    return this.store.findRecord('online-training-entry', params.entry_id)
  },
});
