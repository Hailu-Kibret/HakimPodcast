const express = require('express');
const {
    getJobs,
    getJobsById,
  postJob,
  updateJobsById,
  deleteJobsById
} = require('../controller/postController');
const postRouter= express();
postRouter.post('/', postJob);
postRouter.get('/', getJobs);
postRouter.get('/:id', getJobsById);
postRouter.put('/:id', updateJobsById);
postRouter.delete('/:id', deleteJobsById);

module.exports = postRouter;