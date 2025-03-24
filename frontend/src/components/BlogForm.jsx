// frontend/src/components/BlogForm.jsx
import React, { useState } from 'react';

function BlogForm({ onAddBlog }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert('Please enter a title and content');
      return;
    }

    const newBlog = {
      title,
      content,
      author: author || 'Anonymous'
    };

    onAddBlog(newBlog);
    
    // Reset form
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="blog-form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Author (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea 
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Publish Blog</button>
      </form>
    </div>
  );
}

export default BlogForm;