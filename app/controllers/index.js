import Ember from 'ember';
import HighlightedIcon from '../layers/highlighted-icon';

<<<<<<< HEAD
export default Ember.Controller.extend({

=======
export default Ember.ArrayController.extend({
  itemController: 'klub',
  hoveredKlub: null,
  hoveredMarker: null,
  markers: null,
  layers: function(){
    return this.map(function(klub){
      return {
        location: klub.get('latlng'),
        id: klub.get('id'),
        // icon: new L.Icon.Default()
      };
    }.bind(this));
  }.property('@each.latlng'),
  actions: {
    highlightKlub: function(klubId) {
      var item = this.findBy('id', klubId);
      var marker = this.get('layers').findBy('id', klubId);

      // TODO
      // layer.setIcon(new HighlightedIcon())

      this.set('hoveredKlub', item);
      // this.set('hoveredMarker', marker)
    },
    unHighlightKlub: function() {
      this.set('hoveredKlub', null);
      // this.get('hoveredMarker').setIcon(new L.Icon.Default());  // TODO
      // this.set('hoveredMarker', null);
    }
  }
>>>>>>> Reverted..trying to bind icons unsuccessfully
});
