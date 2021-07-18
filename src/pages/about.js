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
        {site.siteMetadata.title} is a blog about using math to understand
        the world of gaming. Whether it be the probability rules that 
        define how fate controls tabletop games or the statistics
        describe how we choose to play our favorite video games there is much
        to explore. I hope you enjoy reading!
      </p>
      <p>
        You can check me out on <a href="https://twitter.com/_amas0">Twitter</a> {" or "}
        <a href="https://github.com/amas0">Github</a>.
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
