import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div>
      <h1>
        <span role="img" aria-label="Dizzy face">
          😵
        </span>{' '}
        Ups, this page does not exist...
      </h1>
      <p>
        Was it on purpose? Oh you curious web surfer. Here,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          take your price.
        </a>
      </p>
      <Link to="/">Go home.</Link>
    </div>
  );
}

export default Page404;
