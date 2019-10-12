import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';
import Layout from '../components/layout';
import CodeBlock from '../components/CodeBlock';
import PrevNext from '../components/PrevNext'

const components = {
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
      <PrevNext prev={prev} next={next} />
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
