import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default ({
  pageContext: { slug, prev, next },
  data: { mdx: postNode },
}) => {
  return (
    <Layout>
      <div>
        <h1>{postNode.frontmatter.title}</h1>
        <MDXRenderer>{postNode.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        categories
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`;
