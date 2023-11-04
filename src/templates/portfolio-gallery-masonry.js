import React from "react";
import Work from "../sections/charlie-work-item/Work";

const PortfolioGallery = ({ location }) => {
  return (
    <Work style="gallery-masonry" location={location} />
  );
};
export default PortfolioGallery;
