const fs = require('fs');
const path = require('path');

const PortfolioItems = require('./src/data/PortfolioItems.json')

exports.onCreatePage = ({ actions }) => {
  const { createPage } = actions;

  for (const item of PortfolioItems) {
    createPage({
      path: item.slug,
      component: path.resolve(`./src/templates/portfolio-gallery.js`),
    })
  }

  if (process.env.NODE_ENV !== `production`) {
    const files = fs.readdirSync(path.resolve(`./src/pages-dev`));

    for (const file of files) {
      if (file.endsWith(`.js`)) {
        createPage({
          path: `/${file.replace(`.js`, ``)}/`,
          component: path.resolve(`./src/pages-dev/${file}`),
        });
      }
    }
  }
}
