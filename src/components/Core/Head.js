import React from 'react';
import { Helmet } from 'react-helmet';

import imgFavicon from "../../assets/image/favicon.png";

const Head = ({ title }) => {
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/png" href={imgFavicon} />
                <title>{ `Charlie Chiu | Experience Designer${ title ? " | " + title : "" }` }</title>
            </Helmet>
        </>
    )
}

export default Head;