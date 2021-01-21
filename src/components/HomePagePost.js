import React from "react";
import { Link } from "gatsby";
import { jsx, NavLink } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

function HomePagePost({ node }) {
  return (
    <div>
      <div style={{ marginBottom: "1.45rem" }}>
        <Link to={node.frontmatter.path}>
          <NavLink>
            <h1 style={{ marginBottom: "0" }}>{node.frontmatter.title}</h1>
            <div style={{ color: "grey", marginLeft: ".1rem" }}>
              {node.frontmatter.date}
            </div>
          </NavLink>
        </Link>
      </div>
      <Link
        to={node.frontmatter.path}
        sx={{
          marginBottom: ".5rem",
          textDecoration: "none",
          color: "text",
          "&:hover": {
            color: "primary",
          },
        }}
      ></Link>
      <MDXProvider>
        <MDXRenderer>{node.body}</MDXRenderer>
      </MDXProvider>
	  <hr style={{ height: 2 }}/>
    </div>
  );
}

export default HomePagePost;
