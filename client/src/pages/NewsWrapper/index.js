import React from 'react';
import NewsArticle from '../../components/NewsArticle';
import NewsFilter from '../../components/NewsFilter';

import './styles.css';
import './query.css';

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