# Custom build using WebPack and thin bundles

This example uses Bryntum Calendar bundled with webpack.
This very basic demo shows how to use Calendar and webpack to do a custom build from our thin packages

This application was generated with:

* [Webpack](https://webpack.js.org/) [5.96.1]
* `html-webpack-plugin` is used for bundling files for a production, please refer to
  [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin) configuration guide
* `copy-webpack-plugin` is used to copy required assets to production folder, please refer to
  [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/) configuration guide
* `sass-loader` is used for processing styles from `*.scss` files, please refer to
  [sass-loader](https://webpack.js.org/loaders/sass-loader) configuration guide
* `mini-css-extract-plugin` is used for separate css files output, please refer to
  [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin) configuration guide

## Webpack documentation

Please check the [webpack online documentation](https://webpack.js.org/concepts/) for the detailed
integration information and help.

# Bryntum Repository access setup

**IMPORTANT NOTE!** These access instructions are mandatory when using the private Bryntum NPM repository.

This application uses npm packages from the Bryntum private NPM repository. You must be logged-in to this repository as
a licensed or trial user to access the packages.

Please check [Online npm repository guide](https://bryntum.com/products/calendar/docs/guide/Calendar/npm-repository) for the detailed information on the
sign-up/login process.

# Installation

Use the following command to install the example packages after the successful login.

Using **npm**:

```shell
npm install
```

Using **yarn**:

```shell
yarn install
```

# Running a development server

To build example and start development server run this command:

Using **npm**:

```shell
npm run start
```

Using **yarn**:

```shell
yarn run start
```

Navigate to `http://localhost:8080/` or `http://127.0.0.1:8080/` in your browser. We recommend to use latest versions of
modern browsers like Chrome, FireFox, Safari or Edge (Chromium). The app will automatically reload if you change any of
the source files.

# Creating a production build

To build production code for the example run this command:

Using **npm**:

```shell
npm run build
```

Using **yarn**:

```shell
yarn run build
```

The build artifacts will be stored in the `dist/` directory.

# Distribution zip references

* Bryntum API docs. Open `docs/index.html` in your browser.
* Bryntum Repository guide `docs/guides/npm-repository.md`.
* Bryntum Vue integration guide `docs/guides/integration/vue/guide.md`.

# Online References

* [Webpack](https://webpack.js.org/)
* [Bryntum Calendar documentation](https://bryntum.com/products/calendar/docs/)
* [Bryntum Calendar examples](https://bryntum.com/products/calendar/examples/)
* [Bryntum npm repository guide](https://bryntum.com/products/calendar/docs/guide/Calendar/npm-repository)
* [Bryntum support Forum](https://forum.bryntum.com/)
* [Contacts us](https://bryntum.com/contact/)
