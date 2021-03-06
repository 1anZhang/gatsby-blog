import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Subline from './Subline';

const Post = styled.article`
  max-width: 880px;
  margin: 24px auto;
  padding: 3.5rem 5.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: rgba(066, 033, 043, 0.95);
    &:hover {
      color: rgba(011, 124, 242, 0.35);
    }
  }
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: 1;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Article = ({ title, date, excerpt, slug, timeToRead, categories }) => {
  const firstChar = title.charAt(0);

  return (
    <Post>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; {timeToRead} Min Read
        <br />
        Catagories:
        {categories &&
          categories.map((cat, i) => (
            <React.Fragment key={cat}>
              {!!i && ', '}
              <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
            </React.Fragment>
          ))}
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
};
