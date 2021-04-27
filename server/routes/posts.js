import express from 'express';

import {getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js';

const router = express.Router();

//It will not be started with localhost:5000/
//It will be started with localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;