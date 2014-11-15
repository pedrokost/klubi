export default EmberLeaflet.MarkerCollectionLayer.extend({
  content: function() {
    var res = this.get('controller').map(function(klub){
      return {
        location: klub.get('latlng')
      };
    });
    return res;
  }.property('controller')
});
