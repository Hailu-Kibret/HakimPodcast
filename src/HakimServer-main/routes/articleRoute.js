// routes/article.js
const express = require('express');
const {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  addComment
} = require('../controller/articleController');
const articleRouter = express();
// @route   GET /api/articles
// @desc    Get all articles
// @access  Public
articleRouter.get('/', getArticles);

// @route   GET /api/articles/:id
// @desc    Get a specific article by ID
// @access  Public
articleRouter.get('/:id', getArticleById);

// @route   POST /api/articles
// @desc    Create a new article
// @access  Public
articleRouter.post('/', createArticle);

// @route   PUT /api/articles/:id
// @desc    Update an article by ID
// @access  Public
articleRouter.put('/:id', updateArticle);

// @route   DELETE /api/articles/:id
// @desc    Delete an article by ID
// @access  Public
articleRouter.delete('/:id', deleteArticle);

// @route   DELETE /api/articles/:id
// @desc    Delete an article by ID
// @access  Public
articleRouter.post('/', addComment);


module.exports = articleRouter ;
