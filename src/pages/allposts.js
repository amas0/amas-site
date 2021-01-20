import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Snippet from "../components/Snippet";

function Posts({ data }) {
	return (
		<Layout>
			<SEO title="Posts" />
			{data.allMdx.edges.map(({ node }) => (
				<div key={node.frontmatter.path} style={{marginBottom: "1rem"}}>
				<Snippet frontmatter={node.frontmatter}/>
				</div>
			))}
		</Layout>
	);
}

export default Posts;

export const pageQuery = graphql`
  query MyQueryPostPage {
    allMdx {
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
