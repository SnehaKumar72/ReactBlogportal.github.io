// BlogPost.js
import React, { useState } from 'react';
import { PostTitle, PostContent, PostAuthor } from './BlogComponents';
import Comment from './Comment';
import { quotes } from './blogData';

function BlogPost({ title, content, author, date }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showContent, setShowContent] = useState(false);

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const handleCommentSubmit = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="blog-post">
      <PostTitle title={title} />
      <PostAuthor author={author} />
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <p>{randomQuote}</p>
      <button onClick={() => setShowContent(!showContent)}>
        Toggle Content
      </button>
      {showContent && <PostContent content={content} />}
      <div className="comments">
        <h3>Comments:</h3>
        <ul>
          {comments.map((comment, index) => (
            <Comment key={index} text={comment} />
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default BlogPost;
