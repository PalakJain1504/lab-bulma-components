import React from 'react';

function Message({ isInfo, title, children }) {
  const className = isInfo ? 'message is-info' : 'message';

  return (
    <article className={className}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {children}
      </div>
    </article>
  );
}

export default Message;
