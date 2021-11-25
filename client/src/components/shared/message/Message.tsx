import React, { FC } from 'react';

import styles from './Message.module.scss';

export interface MessageProps {
  text: string;
}

const Message: FC<MessageProps> = ({ text }) => {
  return (
    <div className={styles.container} data-testid="message">
      <h3 data-testid="message-text">{text}</h3>
    </div>
  );
};

export default Message;
