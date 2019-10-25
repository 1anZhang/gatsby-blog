import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';
import kebabCase from 'lodash/kebabCase';
import { calcReadTime } from '../utils/lo';
import { Calender, Clock, Label } from '../icons';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import PrevNext from '../components/PrevNext';

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 680px;
`;

const Pre = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 13px;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-family: Georgia;
`;
const InfoGroup = styled.div`

`;

const InfoItem = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-family: Georgia;
  text-align: right;
`;

const CatagoryItem = styled(Link)`
  margin: 0 4px;
`;

const components = {
  pre: props => <Pre {...props} />,
  code: CodeBlock
}

export default ({
  pageContext: { slug, prev, next },
  data: { mdx: postNode },
}) => {
  const readTime = calcReadTime(postNode.wordCount.words);
  return (
    <Layout>
      <MainContent>
        <Title>{postNode.frontmatter.title}</Title>
        <InfoGroup>
          <InfoItem>{postNode.frontmatter.date}</InfoItem>
          <InfoItem>{readTime}min read</InfoItem>
          <InfoItem>
          {
            postNode.frontmatter.categories.map((item) => (
              <CatagoryItem key={item} to={`/categories/${kebabCase(item)}`}>{item}</CatagoryItem>
            ))
          }
          </InfoItem>
        </InfoGroup>
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
