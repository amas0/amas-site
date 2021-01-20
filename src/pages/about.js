import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const AboutPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery2 {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <Layout>
          <SEO title="About" />
          <p>
            Hey, I'm Andrew. {data.site.siteMetadata.title} is my blog about
            math, games, data, combinations of those, and whatever else may
            strike my personal interest. I suppose that means this blog could be
            about anything. Reader beware.
          </p>
          <p>
            You can check me out on{" "}
            <a href="https://twitter.com/_amas0">Twitter</a>,{" "}
            <a href="https://github.com/amas0">Github</a> or email me directly.
          </p>
        </Layout>
      )}
    />
  );
};

export default AboutPage;
