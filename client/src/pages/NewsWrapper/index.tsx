import React from 'react';
import NewsArticle from '../../components/NewsArticle/index.tsx';
import NewsFilter from '../../components/Forms/NewsFilter/index.tsx';

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