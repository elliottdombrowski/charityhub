import React from 'react';
import FriendList from '../../components/FriendList';
import MessageContainer from '../../components/MessageContainer';

import './styles.css';
import './query.css';

const Messages = () => {
  return (
    <main className='message-page-wrapper'>
      main
      <FriendList />
      <MessageContainer />
    </main>
  );
};

export default Messages;