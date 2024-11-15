// routes/blog.js
const express = require('express');
const {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  addComment
} = require('../controller/blogController');
const blogRouter = express();
// @route   GET /api/blogs
// @desc    Get all blogs
// @access  Public
blogRouter.get('/', getBlogs);

// @route   GET /api/blogs/:id
// @desc    Get a specific blog by ID
// @access  Public
blogRouter.get('/:id', getBlogById);

// @route   POST /api/blogs
// @desc    Create a new blog
// @access  Public
blogRouter.post('/', createBlog);

// @route   PUT /api/blogs/:id
// @desc    Update a blog by ID
// @access  Public
blogRouter.put('/:id', updateBlog);

// @route   DELETE /api/blogs/:id
// @desc    Delete a blog by ID
// @access  Public
blogRouter.delete('/:id', deleteBlog);

module.exports = blogRouter ;
