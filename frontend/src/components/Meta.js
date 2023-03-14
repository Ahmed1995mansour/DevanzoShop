import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
      <meta
        name='keywords'
        content={keywords}
      />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Devanzo",
  description: "All you want is here in Devanzo shop",
  keywords: "electronics, buy electronics , devices , PC , console",
};

export default Meta;
