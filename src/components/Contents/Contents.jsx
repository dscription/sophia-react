import React from 'react';
import ContentModal from '../ContentModal/ContentModal';

const Contents = ({ contents }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {contents &&
        contents.map((content, index) => (
          <ContentModal content={content} index={index} />
        ))}
    </div>
  );
};

export default Contents;
