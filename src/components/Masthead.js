import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Masthead() {
  const { site } = useStaticQuery(graphql`
    query MastheadQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        {site.siteMetadata.title}
      </h1>
    </div>
  );
}
