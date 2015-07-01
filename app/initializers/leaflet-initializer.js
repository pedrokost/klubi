export function initialize(/* container, application */) {
  L.Icon.Default.imagePath = 'https://d3s8w0mc0h7w8s.cloudfront.net/assets/images';
}

export default {
  name: 'leaflet-initializer',
  initialize: initialize
};
