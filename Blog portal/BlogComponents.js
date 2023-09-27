// BlogComponents.js
import React from 'react';

export function PostTitle({ title }) {
  return <h2>{title}</h2>;
}

export function PostContent({ content }) {
  return <p>{content}</p>;
}

export function PostAuthor({ author }) {
  return <p>Author: {author}</p>;
}
