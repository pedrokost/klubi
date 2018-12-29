# klubi

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## When adding a new category

1. `services/categories.js` should list it
2. Place category icon for marker in '/assets/icons/<category>.png' (source: `../images/icons`)
3. `klub-icon.js` should link to category icon
4. In `logo-buttons.scss` as the category to the `$list`.
5. In `../images/logo_generation/` update `logo.rb` category list `SUBTITLES` and follow the instructions in the `Readme.md` there to generate the new logo. Finally copy new images to `/assets/logo/`.
6. Open `../images/category-social.psd` and generate images for new categories with dimensions 1434x1434.jpg and 200x200.png. Plase them in `/assets/social`.
7. Resize the jpg to a 200x200 png using `convert fb-floorball.jpg -resize 200x200 fb-floorball.png`
8. Optimize the size of the jpg with `jpegoptim fb-floorball.jpg`
9. Opimize the size of the png with `optipng fb-floorball.png`
10. [optional] Enqueue in Buffer news
11. [optional] Invite zveza to add map to their page

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Yarn](https://yarnpkg.com/)
- [Bower](https://bower.io/)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd klubi`
- `yarn install`
- `bower install`

### Troubleshooting

- `rm -rf tmp`
- `sudo umount /mnt/EmberCliRamdisk`
- `sudo rm -R /mnt/EmberCliRamdisk/`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

```
ember deploy prod
# Review changes in browser, acessing: www.klubi.si/?index_key=klubi:<key>

# When happy run
ember deploy:activate prod --revision=hash
```

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
