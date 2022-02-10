import React from 'react';
import NewsArticle from '../../components/NewsArticle';
import NewsFilter from '../../components/Forms/NewsFilter';

import './styles.scss';
import './query.scss';

const NewsWrapper = () => {
  return (
    <main className='news-wrapper'>
      <h1>news wrapper</h1>
      <NewsFilter />
      <NewsArticle />
    </main>
  );
};

export default NewsWrapper;