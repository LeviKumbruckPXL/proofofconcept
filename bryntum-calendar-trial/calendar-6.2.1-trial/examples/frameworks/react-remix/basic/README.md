# Basic setup with Remix (Typescript)

This example uses Bryntum Calendar wrapped in the provided `BryntumCalendar` wrapper.
This demo contains the React Calendar wrapper and the demo is written in Remix using Typescript.

This application was generated with:

* [Remix](https://remix.run/) []
* [Vite](https://vitejs.dev/) []

# Bryntum Repository access setup

**IMPORTANT NOTE!** These access instructions are mandatory when using the private Bryntum NPM repository.

This application uses npm packages from the Bryntum private NPM repository. You must be logged-in to this repository as
a licensed or trial user to access the packages.

Please check [Online npm repository guide](https://bryntum.com/products/calendar/docs/guide/Calendar/npm-repository) for the detailed information on the
sign-up/login process.

# Remix integration guide

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for
details on supported features.

## Prerequisite

First thing first, install the dependencies:

```bash
npm install
```

Next, ensure you have the required assets and styling, run:

```bash
npm run pre-dev
```

This will copy some files from `node_modules/@bryntum`, compile `scss` to `css` and make some path changes to the newly
created `css` file.

## Development

Run the Vite dev server:

```bash
npm run dev
```

## Deployment

First, build your app for production:

```bash
npm run build
```

Then run the app in production mode:

```bash
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
