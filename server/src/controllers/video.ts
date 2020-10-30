import { Response, RequestHandler } from 'express';
import Video from '../models/video';

export const createVideo: RequestHandler = async (req, res) => {
  const video = await Video.findOne({ url: req.body.url });

  if (video) {
    return res.status(303).json({ message: 'the url already exists' });
  }

  const newVideo = new Video(req.body);
  const savedVideo = await newVideo.save();

  res.json(savedVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();

    return res.json(videos);
  } catch (error) {
    res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const video = await Video.findById(req.params.id);

  if (!video) {
    return res.status(204).json();
  }

  return res.json(video);
};

export const deleteVideo: RequestHandler = async (req, res) => {
  const video = await Video.findByIdAndDelete(req.params.id);

  if (!video) {
    return res.status(204).json();
  }

  return res.status(204).json();
};

export const updateVideo: RequestHandler = async (req, res): Promise<Response> => {
  const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!video) {
    return res.status(204).json();
  }

  return res.json(video);
};
