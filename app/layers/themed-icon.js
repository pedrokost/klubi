// FIXME: The clustering algorithm seems to cause wrong icons to be shown
// when diffent icons are grouped within a single cluster

export default L.Icon.Default.extend({
  initialize: function (opts) {
    switch (opts.category) {
      case 'karate':
        this.options.iconUrl = '/assets/icons/karate.png';
        break;
      case 'fitnes':
        this.options.iconUrl = '/assets/icons/fitnes.png';
        break;
      case 'wellness':
        this.options.iconUrl = '/assets/icons/spa.png';
        break;
      case 'judo':
        this.options.iconUrl = '/assets/icons/judo.png';
        break;
      case 'gimnastika':
        this.options.iconUrl = '/assets/icons/gimnastika.png';
        break;
      default:
        this.options.iconUrl = '/assets/icons/default.png';
        break;
      // class constructor
    }
    this.options.shadowUrl = '/assets/icons/shadow.png';
    this.options.iconSize = new L.Point(32, 37);
    this.options.iconAnchor = new L.Point(16, 37);
    this.options.shadowSize = new L.Point(51, 37);
    this.options.shadowAnchor = new L.Point(24, 37);
    this.options.popupAnchor = new L.Point(0, 0);

    // TODO: highlighted
  },


/*  options: {
    iconSize: new L.Point(35, 60),
    iconAnchor: new L.Point(17, 60),
    shadowSize: new L.Point(65, 58)
  }*/
});
