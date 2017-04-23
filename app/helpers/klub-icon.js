import Ember from "ember";

/* globals L */

const _categoryImageMap = {
  squash: "/assets/icons/squash.png",
  nogomet: "/assets/icons/nogomet.png",
  karate: "/assets/icons/karate.png",
  fitnes: "/assets/icons/fitnes.png",
  spa: "/assets/icons/spa.png",
  judo: "/assets/icons/judo.png",
  gimnastika: "/assets/icons/gimnastika.png",
  tenis: "/assets/icons/tenis.png",
  loading: "/assets/icons/default.png",
  default: "/assets/icons/default.png"
};

const SHADOW_IMAGE_URL = "/assets/icons/shadow.png";

function categoryImage(category) {
  let cat = _categoryImageMap.hasOwnProperty(category) ? category : "default";

  return _categoryImageMap[cat];
}

export function klubIcon(params /*, hash*/) {
  let [category, klubName] = params;

  let imageUrl = categoryImage(category);
  let shadowUrl = SHADOW_IMAGE_URL;
  let className = "klub-icon";
  let html = `<img src="${shadowUrl}" class="klub-icon-shadow"/>
    <img src="${imageUrl}" alt="${klubName} marker icon" class="klub-icon-marker" tabindex="0" />
    <div class="klub-icon-title_wrapper"><span class="klub-icon-title">${klubName}</span></div>
    <div class="klub-icon-title_wrapper klub-icon-title_wrapper-shadow"><span class="klub-icon-title">${klubName}</span></div>`;
  let iconSize = null; // To remove default size

  return new L.DivIcon({ html, className, iconSize });
}

export default Ember.Helper.helper(klubIcon);
