import ApplicationAdapter from './application';
import Ember from "ember";

export default ApplicationAdapter.extend({

  findAll() {
    var fitnesisiUrl = "https://www.kimonolabs.com/api/6qyfxiks?apikey=219342788933c1752f1a6f384696287c&kimmodify=1&kimwithurl=1";
    var fitnessiinfoUrl = "https://www.kimonolabs.com/api/4s7awhw0?&apikey=219342788933c1752f1a6f384696287c&kimmodify=1&kimwithurl=1";
    return Ember.RSVP.all([
      this.ajax(fitnesisiUrl, 'GET'),
      this.ajax(fitnessiinfoUrl, 'GET')
    ]).then(function(data) {
      var fitnesisiData = data[0];
      var fitnessiinfoData = data[1];

      data = fitnesisiData.clanki.concat(fitnessiinfoData.clanki);

      data = data.sort(function(a,b){
        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
      });

      return {
        clanki: data
      };
    });
  },
});
