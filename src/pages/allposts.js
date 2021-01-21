import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Snippet from "../components/Snippet";

function Posts({ data }) {
  return (
    <Layout>
      <SEO title="Posts" />
      <h1>All posts</h1>
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.frontmatter.path} style={{ marginBottom: "1rem" }}>
          <Snippet frontmatter={node.frontmatter} />
        </div>
      ))}
    </Layout>
  );
}

export default Posts;

export const pageQuery = graphql`
  query MyQueryPostPage {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            path
            summary
            date
          }
        }
      }
    }
  }
`;
