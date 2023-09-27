// BlogList.js
import React, { useState } from 'react';
import BlogPost from './BlogPost';

function BlogList({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li
            key={post.id}
            onClick={() => handlePostClick(post)}
            style={{ cursor: 'pointer' }}
          >
            {post.title}
          </li>
        ))}
      </ul>
      {selectedPost && <BlogPost {...selectedPost} />}
    </div>
  );
}

export default BlogList;
