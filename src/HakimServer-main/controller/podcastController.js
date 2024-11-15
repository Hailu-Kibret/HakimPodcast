// controllers/videoController.js
const Video = require('../models/podcast');

// @desc    Get all videos
// @route   GET /api/videos
// @access  Public
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a specific video by ID
// @route   GET /api/videos/:id
// @access  Public
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ msg: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Video not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a new video
// @route   POST /api/videos
// @access  Public
const createVideo = async (req, res) => {
  const { videoSrc, category, episode, title } = req.body;

  try {
    const newVideo = new Video({
      videoSrc,
      category,
      episode,
      title,
    });

    const savedVideo = await newVideo.save();
    res.json(savedVideo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a video by ID
// @route   PUT /api/videos/:id
// @access  Public
const updateVideo = async (req, res) => {
  const { videoSrc, category, episode, title } = req.body;

  // Build video object
  const videoFields = {};
  if (videoSrc) videoFields.videoSrc = videoSrc;
  if (category) videoFields.category = category;
  if (episode) videoFields.episode = episode;
  if (title) videoFields.title = title;

  try {
    let video = await Video.findById(req.params.id);

    if (!video) return res.status(404).json({ msg: 'Video not found' });

    video = await Video.findByIdAndUpdate(
      req.params.id,
      { $set: videoFields },
      { new: true }
    );

    res.json(video);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Video not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a video by ID
// @route   DELETE /api/videos/:id
// @access  Public
const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ msg: 'Video not found' });
    }

    await video.deleteOne();

    res.json({ msg: 'Video removed', 
               error : false,
               success : true,
               data:video
    });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Video not found' });
    }
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
