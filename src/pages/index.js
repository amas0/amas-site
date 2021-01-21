/** @jsx jsx */
import { graphql } from "gatsby";
import { jsx } from "theme-ui";

import HomePagePost from "../components/HomePagePost";
import Layout from "../components/Layout";
import Masthead from "../components/Masthead";
import SEO from "../components/SEO";

import { Vega } from "react-vega";
import { Helmet } from "react-helmet";

function Index({ data }) {
  console.log(Vega);
  return (
    <Layout>
      <Masthead />
      <hr sx={{ height: 1 }} />
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.frontmatter.path}>
          <HomePagePost node={node}></HomePagePost>
        </div>
      ))}
      <Helmet
        title="Analytics Check"
        titleTemplate="%s"
        description="...can I roll Perception instead?"
      />
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
