import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta
        name="description"
        content="A moives website using reactjs, tailwindcss"
      />
    </Helmet>
  );
};

export default SEO;
