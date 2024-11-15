// routes.js
const express = require('express');
const articleRouter = require('./articleRoute');
const blogRouter = require('./blogRoute');
const contactRouter = require('./contactRoute');
const jobRouter = require('./jobRoute');
const latestRouter = require('./latestRoute');
const partnerRouter = require('./partnerRoute');
const podcastRouter = require('./podcastRoute');
const scholarRouter = require('./scholarRoute');
const subscribeRouter = require('./subscribeRoute');
const userRouter = require('./userRoute');
const bioRoutes = require('./bioRoute');
const postRouter=require('./postRoute')
const router = express.Router();

// Use routes
router.use('/bios', bioRoutes);
router.use('/articles', articleRouter);
router.use('/blogs', blogRouter);
router.use('/contacts', contactRouter);
router.use('/jobs', jobRouter);
router.use('/latest', latestRouter);
router.use('/partners', partnerRouter);
router.use('/podcasts', podcastRouter);
router.use('/scholars', scholarRouter);
router.use('/subscribes',subscribeRouter);
router.use('/users', userRouter);
router.use('/posts',postRouter);
module.exports = router;
