import express from 'express';

import {getPosts, createPost} from '../controllers/posts.js';

const router = express.Router();

//It will not be started with localhost:5000/
//It will be started with localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);

export default router;