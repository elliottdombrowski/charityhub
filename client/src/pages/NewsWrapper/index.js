import React from 'react';
import AnimatePage from '../../AnimatePage';
import NewsArticle from '../../components/NewsArticle/';
import NewsFilter from '../../components/Forms/NewsFilter/';

import './styles.scss';
import './query.scss';

const NewsWrapper = () => {
  return (
    <AnimatePage>
      <main className='news-wrapper'>
        <h1>news wrapper</h1>
        <NewsFilter />
        <NewsArticle />
      </main>
    </AnimatePage>
  );
};

export default NewsWrapper;