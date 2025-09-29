# How to run locally

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Install packages

Using yarn:
```bash
yarn
```

Using npm:
```
npm i
```

### Local Development

Using yarn:
```bash
yarn start
```

Using npm:
```
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. You can also visit `localhost:3000` directly. 

# How to make changes

## Updating documentation

Docs all live under `/docs`. Add any files and subfolders you'd like, and they will appear automatically in the sidebar!

If we want to explicitly specify an order of sidebar links, we can do so by modifying `sidebars.js`. 

## Updating the header/footer

Header and footer settings can be configed via `docusaurus.config.js`. Header settings, including a list of nav bar links, are listed under `themeConfig > navbar`. Footer settings are under `themeconfig > footer`.

## Updating the home page

The home page is powered by `src/pages/index.js`. We can modify the html contained within that file to update the home page. 

## Creating new pages

You can add new pages to `src/pages`, following the same structure as `index.js`. These pages will become available under the URL `/bostonmesh/your_page_name`. 

### Writing static HTML

If you prefer to write static HTML, and then see that contents appear within the header/footer, you can do the following:

1. Create a new HTML file: `static/your_new_page.html`. Populate this page with any contents that you want. This page does _not_ need to include any header, footer, etc.
2. Create a new file `src/pages/your_new_page.js`.
3. Copy-and-paste the contents of `src/pages/test_page.js` into your new page.
  a. Replace `test_page.html` with `your_new_page.html`
4. Your new page should now be visible at `/bostonmesh/your_page_name`.

