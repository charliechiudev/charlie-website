import React from "react";
import Work from "../sections/charlie-work-item/Work";

const PortfolioItems = require('../data/PortfolioItems.json');

const PortfolioGallery = ({ location }) => {
  const portfolioItem = PortfolioItems.find(i => i.slug === location.pathname.substr(0, location.pathname.length - 1));

  return (
    <Work portfolioItem={portfolioItem} />
  );
};
export default PortfolioGallery;
