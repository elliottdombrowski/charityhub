import React from 'react';
import FriendList from '../../components/FriendList/';
import MessageContainer from '../../components/MessageContainer/';

import './styles.scss';
import './query.scss';

const MessageWrapper = () => {
  return (
    <main className='message-page-wrapper'>
      main
      <FriendList />
      <MessageContainer />
    </main>
  );
};

export default MessageWrapper;