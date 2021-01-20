import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import "katex/dist/katex.min.css";

const shortcodes = { Link }; // Provide common components here

const Post = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <div style={{ marginBottom: "1.45rem" }}>
        <h1 style={{ marginBottom: "0" }}>{post.frontmatter.title}</h1>
        <div style={{ color: "grey", marginLeft: ".1rem" }}>
          {post.frontmatter.date}
        </div>
      </div>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
        date
      }
      body
    }
  }
`;
