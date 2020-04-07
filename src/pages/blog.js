import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Article from '../components/Article';

const PostWrapper = styled.div`
  padding: 24px;
`;

const BlogPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <SEO title="blog" />
    <PostWrapper>
      {posts.map(post => (
        <Article
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          excerpt={post.excerpt}
          timeToRead={post.timeToRead}
          slug={post.fields.slug}
          categories={post.frontmatter.categories}
          key={post.fields.slug}
        />
      ))}
    </PostWrapper>
  </Layout>
);

export default BlogPage;

export const BlogQuery = graphql`
  query BlogQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          categories
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`;
