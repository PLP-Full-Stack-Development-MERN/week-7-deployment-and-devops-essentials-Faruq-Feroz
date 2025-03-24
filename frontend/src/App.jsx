// frontend/src/App.jsx
import React, { useState, useEffect } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Add new blog
  const addBlog = async (newBlog) => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });
      const blog = await response.json();
      setBlogs([blog, ...blogs]);
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  // Delete blog
  const deleteBlog = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'DELETE',
      });
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="App">
      <h1>Blog Platform</h1>
      <BlogForm onAddBlog={addBlog} />
      <BlogList blogs={blogs} onDeleteBlog={deleteBlog} />
    </div>
  );
}

export default App;