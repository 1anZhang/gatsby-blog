import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';
import Layout from '../components/layout';
import CodeBlock from '../components/CodeBlock';

const components = {
  h1: props => <h1 style={{color: 'tomato'}} {...props} />,
  pre: props => <div {...props} />,
  code: CodeBlock
}

export default ({
  pageContext: { slug, prev, next },
  data: { mdx: postNode },
}) => {
  return (
    <Layout>
      <MDXProvider components={components}>
        <MDXRenderer>{postNode.body}</MDXRenderer>
      </MDXProvider>
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
