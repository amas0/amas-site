/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, NavLink } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

function HomePagePost({ node }) {
  return (
    <div>
      <div sx={{ marginBottom: "1.45rem" }}>
        <NavLink href={node.frontmatter.path}>
          <h1 sx={{ marginBottom: "0" }}>{node.frontmatter.title}</h1>
          <div sx={{ color: "grey", marginLeft: ".1rem" }}>
            {node.frontmatter.date}
          </div>
        </NavLink>
      </div>
      <MDXProvider>
        <MDXRenderer>{node.body}</MDXRenderer>
      </MDXProvider>
      <hr sx={{ height: 1 }} />
    </div>
  );
}

export default HomePagePost;
