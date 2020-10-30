import { Router } from 'express';
const router = Router();

import {
  getVideos,
  getVideo,
  createVideo, updateVideo, deleteVideo
} from '../controllers/video';

router.get('/videos', getVideos);

router.get('/videos/:id', getVideo);

router.post('/videos', createVideo);

router.delete('/videos/:id', deleteVideo);

router.put('/videos/:id', updateVideo);

export default router;
