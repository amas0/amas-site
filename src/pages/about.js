import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function AboutPage() {
  const { site } = useStaticQuery(graphql`
    query AboutPageQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="About" />
      <p>
        Hey, I'm Andrew. {site.siteMetadata.title} is my blog about math, games,
        data, combinations of those, and whatever else may strike my personal
        interest. I suppose that means this blog could be about anything. Reader
        beware.
      </p>
      <p>
        You can check me out on <a href="https://twitter.com/_amas0">Twitter</a>
        , <a href="https://github.com/amas0">Github</a>, or email me directly.
      </p>
      <p>
        This site was built with <a href="https://www.gatsbyjs.com/">Gatsby</a>{" "}
        and deployed with <a href="https://www.netlify.com/">netlify</a>.
        Special thanks to <a href="https://github.com/zeevosec">zeevosec</a> for
        providing starter code and guidance on building the site.
      </p>
    </Layout>
  );
}
