/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

function HomePagePost({ node }) {
  return (
    <div>
      <div sx={{ marginBottom: "1.45rem" }}>
        <Link
          to={node.frontmatter.path}
          sx={{
            textDecoration: "none",
            "&:hover": {
              color: "#5496ff",
            },
          }}
        >
          <h1 sx={{ marginBottom: "0" }}>{node.frontmatter.title}</h1>
          <div sx={{ color: "#696969", marginLeft: ".1rem" }}>
            {node.frontmatter.date}
          </div>
        </Link>
      </div>
      <MDXProvider>
        <MDXRenderer>{node.body}</MDXRenderer>
      </MDXProvider>
      <hr sx={{ height: 1 }} />
    </div>
  );
}

export default HomePagePost;
