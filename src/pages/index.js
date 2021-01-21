/** @jsx jsx */
import { Link, graphql } from "gatsby";
import { jsx } from "theme-ui";

import HomePagePost from "../components/HomePagePost";
import Layout from "../components/Layout";
import Masthead from "../components/Masthead";
import SEO from "../components/SEO";

import { Vega } from "react-vega";

function Index({ data }) {
  console.log(Vega);
  return (
    <Layout>
      <SEO title="Home" />
      <Masthead/>
      <hr style={{ height: 1 }}/>
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.frontmatter.path}>
          <HomePagePost node={node}></HomePagePost>
        </div>
      ))}
    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query HomePageQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 4) {
      edges {
        node {
          frontmatter {
            title
            path
            summary
            date
          }
          body
        }
      }
    }
  }
`;
