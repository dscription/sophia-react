import React from 'react';
import ContentModal from '../ContentModal/ContentModal'

const Contents = ({ contents }) => {
  return (
    <>
      {contents &&
        contents.map((content, index) => (
          <ContentModal content={content} index={index} />
        ))}
    </>
  );
};

export default Contents;
