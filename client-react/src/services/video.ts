import axios from 'axios';
import { Video } from '../models/Video';

const URL_API = 'http://localhost:3000';

export const getVideos = async () => {
  return await axios.get<Video[]>(`${URL_API}/videos`);
}

export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${URL_API}/videos/${id}`);
}

export const createVideo = async (video: Video) => {
  return await axios.post(`${URL_API}/videos`, video)
}

export const updateVideo = async (id: string, video: Video) => {
  return await axios.put(`${URL_API}/videos/${id}`, video);
}

export const deleteVideo = async (id: string) => {
  return await axios.delete(`${URL_API}/videos/${id}`);
}
