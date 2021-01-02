import React from 'react';
import ContentCard from '../ContentCard/ContentCard.jsx';
import { Link } from 'react-router-dom';

const Contents = ({ contents }) => {
  return (
    <>
      {contents &&
        contents.map((content, index) => (
          <Link
            key={index}
            to={{ pathname: '/expanded-content', state: content }}
          >
            <ContentCard content={content} />
          </Link>
        ))}
    </>
  );
};

export default Contents;
