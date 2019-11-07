import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Article from '../components/Article';

const Content = styled(Article)`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  overflow: hidden;
`;

const BlogPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <SEO title="blog" />
    <div>
      {posts.map(post => (
        <Content
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          excerpt={post.excerpt}
          timeToRead={post.timeToRead}
          slug={post.fields.slug}
          categories={post.frontmatter.categories}
          key={post.fields.slug}
        />
      ))}
    </div>
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
