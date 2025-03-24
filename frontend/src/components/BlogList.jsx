import React from 'react';

function BlogList({ blogs, onDeleteBlog }) {
  return (
    <div className="blog-list">
      {blogs.length === 0 ? (
        <p className="no-blogs">No blogs available</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-item">
            <h2>{blog.title}</h2>
            <p>By: {blog.author || 'Anonymous'}</p>
            <p>{blog.content}</p>
            <small>{new Date(blog.createdAt).toLocaleDateString()}</small>
            <button onClick={() => onDeleteBlog(blog._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogList;
