// controllers/blogController.js
const Blog = require('../models/blogs');

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a specific blog by ID
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ msg: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Blog not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Public
const createBlog = async (req, res) => {
  const { title, content, author, category, tags, image } = req.body;

  try {
    const newBlog = new Blog({
      title,
      content,
      author,
      category,
      tags,
      image,
    });

    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a blog by ID
// @route   PUT /api/blogs/:id
// @access  Public
const updateBlog = async (req, res) => {
  const { title, content, author, category, tags, image } = req.body;

  // Build blog object
  const blogFields = {};
  if (title) blogFields.title = title;
  if (content) blogFields.content = content;
  if (author) blogFields.author = author;
  if (category) blogFields.category = category;
  if (tags) blogFields.tags = tags;
  if (image) blogFields.image = image;

  try {
    let blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ msg: 'Blog not found' });

    blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: blogFields },
      { new: true }
    );

    res.json(blog);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Blog not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a blog by ID
// @route   DELETE /api/blogs/:id
// @access  Public
const deleteBlog = async (req, res) => {
  try {
    // const blog = await Blog.findById(req.params.id);

    // if (!blog) {
    //   return res.status(404).json({ msg: 'Blog not found' });
    // }
    const deleteBlog = await Blog.deleteOne({ _id : req.body._id})
    if (!deleteBlog) {
        return res.status(404).json({ msg: 'Blog not found' });
       }
    res.json({
        message : "Blog Deleted From Database",
        error : false,
        success : true,
        data : deleteBlog
    })
    //await blog.remove();

    //res.json({ msg: 'Blog removed' });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Blog not found' });
    }
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
    const article = await Blog.findById(id);

    // If no article is found, return a 404 status
    if (!article) {
      return res.status(404).json({ msg: 'Article not found' });
    }

    // Add the new comment to the article's comments array
    blog.comments.push({ author, content });

    // Save the updated article
    await blog.save();

    // Return the updated article
    res.json(blog);
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
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  addComment  
};
