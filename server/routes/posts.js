import express from 'express';

//import { getPosts, createPost ,updatePost} from '../controllers/posts.js';
import { getPosts, createPost ,updatePost,deletePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.patch('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;