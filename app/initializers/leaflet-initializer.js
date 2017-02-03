export function initialize(/* container, application */) {
  L.Icon.Default.imagePath = 'https://d2ne2albfoowfo.cloudfront.net/assets/images';
}

export default {
  name: 'leaflet-initializer',
  initialize: initialize
};
