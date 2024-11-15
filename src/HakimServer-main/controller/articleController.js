const Article = require('../models/articles');

// @desc    Get all articles
// @route   GET /api/articles
// @access  Public
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    console.log("ariicles: ", articles)
    res.json(articles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a specific article by ID
// @route   GET /api/articles/:id
// @access  Public
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ msg: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Article not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a new article
// @route   POST /api/articles
// @access  Public
const createArticle = async (req, res) => {
  const { title, content, author, tags, category, image } = req.body;

  try {
    const newArticle = new Article({
      title,
      content,
      author,
      tags,
      category,
      image,
    });

    const savedArticle = await newArticle.save();
    res.json(savedArticle);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update an article by ID
// @route   PUT /api/articles/:id
// @access  Public
const updateArticle = async (req, res) => {
  const { title, content, author, tags, category, image } = req.body;

  // Build article object
  const articleFields = {};
  if (title) articleFields.title = title;
  if (content) articleFields.content = content;
  if (author) articleFields.author = author;
  if (tags) articleFields.tags = tags;
  if (category) articleFields.category = category;
  if (image) articleFields.image = image;

  try {
    let article = await Article.findById(req.params.id);

    if (!article) return res.status(404).json({ msg: 'Article not found' });

    article = await Article.findByIdAndUpdate(
      req.params.id,
      { $set: articleFields },
      { new: true }
    );

    res.json(article);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Article not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete an article by ID
// @route   DELETE /api/articles/:id
// @access  Public
const deleteArticle = async (req, res) => {
  try {
    // Attempt to delete the article by ID
    const result = await Article.findByIdAndDelete(req.params.id);

    // If no article was found, return a 404 status
    if (!result) {
      return res.status(404).json({ msg: 'Article not found' });
    }

    // Return success message
    res.json({ msg: 'Article removed' });
  } catch (error) {
    // Log error for debugging
    console.error(error.message);

    // Handle ObjectId casting errors specifically
    if (error.name === 'CastError') {
      return res.status(404).json({ msg: 'Article not found' });
    }

    // Return server error status
    res.status(500).send('Server Error');
  }
};

const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { author, content } = req.body;

    // Validate that author and content are provided
    if (!author || !content) {
      return res.status(400).json({ msg: 'Author and content are required' });
    }

    // Find the article by ID
    const article = await Article.findById(id);

    // If no article is found, return a 404 status
    if (!article) {
      return res.status(404).json({ msg: 'Article not found' });
    }

    // Add the new comment to the article's comments array
    article.comments.push({ author, content });

    // Save the updated article
    await article.save();

    // Return the updated article
    res.json(article);
  } catch (error) {
    console.error(error.message);

    // Handle ObjectId casting errors specifically
    if (error.name === 'CastError') {
      return res.status(404).json({ msg: 'Article not found' });
    }

    res.status(500).send('Server Error');
  }
};

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  addComment
};
