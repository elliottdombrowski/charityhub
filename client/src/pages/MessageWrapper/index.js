import React from 'react';
import AnimatePage from '../../AnimatePage';
import FriendList from '../../components/FriendList/';
import MessageContainer from '../../components/MessageContainer/';

import './styles.scss';
import './query.scss';

const MessageWrapper = () => {
  return (
    <AnimatePage>
      <main className='message-page-wrapper'>
        main
        <FriendList />
        <MessageContainer />
      </main>
    </AnimatePage>
  );
};

export default MessageWrapper;