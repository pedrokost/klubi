import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Online Training Entry ${i}`;
  },
  is_priced() {
    return Math.random() > 0.5 ? true : false;
  },
  brief: "This is my brief description",
  description: "#Hello there\n\n##Hello there\n\n###Hello there\n\n####Hello there\n\n#####Hello there\n\n######Hello there\n\nZa konec tedna naj bo 🔥konkreten trening. S trenerjem Urošem ne moreš zgrešiti.😁😂\n\n\n\nKdo bo delal z nami zvečer? Pofočkaj se v komentar, da vidimo, če bo dovolj prostora v dvorani🤣🤣\n\n\n\nZačnemo ob 19.00.\n\n[I'm an inline-style link](https://www.google.com) p.s. Izziv za noge pa ob 17.00🔥",
  organizer: "Legionar Klub",
  categories: ['fitnes'],
});
