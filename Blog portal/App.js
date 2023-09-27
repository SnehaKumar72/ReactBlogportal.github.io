// App.js
import React from 'react';
import './App.css';
import BlogList from './BlogList';
import { blogData } from './blogData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Portal</h1>
        <BlogList posts={blogData} />
      </header>
    </div>
  );
}

export default App;

