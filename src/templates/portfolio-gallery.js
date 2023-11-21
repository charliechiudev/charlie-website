import React from "react";
import Work from "../sections/charlie-work-item/Work";

import Head from "../components/Core/Head";

const PortfolioItems = require('../data/PortfolioItems.json');

const PortfolioGallery = ({ location }) => {
  const portfolioItem = PortfolioItems.find(i => i.slug === location.pathname.substr(0, location.pathname.length - 1));

  return (
    <>
      <Head title={portfolioItem.title} />
      <Work portfolioItem={portfolioItem} />
    </>
  );
};
export default PortfolioGallery;
