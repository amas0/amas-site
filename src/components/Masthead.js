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
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          fontFamily: "Cinzel Decorative",
          color: "#00320b"
        }}
      >
        {site.siteMetadata.title}
      </h1>
    </div>
  );
}
