import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';
import Layout from '../components/layout';
import CodeBlock from '../components/CodeBlock';
import PrevNext from '../components/PrevNext';

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 680px;
`;

const Pre = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 13px;
  border-radius: 5px;
` 

const components = {
  pre: props => <Pre {...props} />,
  code: CodeBlock
}

export default ({
  pageContext: { slug, prev, next },
  data: { mdx: postNode },
}) => {
  return (
    <Layout>
      <MainContent>
        <h1>{postNode.frontmatter.title}</h1>
        <h2>{postNode.frontmatter.date}</h2>
        {/* <h2>{postNode.frontmatter.categories}</h2> */}
        <MDXProvider components={components}>
          <MDXRenderer>{postNode.body}</MDXRenderer>
        </MDXProvider>
        <PrevNext prev={prev} next={next} />
      </MainContent>
    </Layout>
  );
};

export const query = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MM/DD/YYYY")
        slug
        categories
        title
      }
      wordCount {
        words
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
