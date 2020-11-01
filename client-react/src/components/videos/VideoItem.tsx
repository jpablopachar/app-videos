import React from "react";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import { Video } from "../../models/Video";
import { deleteVideo } from '../../services/video'
import "./VideoItem.css";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const history = useHistory();
  const deleteVideoById = async (id: string) => {
    await deleteVideo(id);
    loadVideos();
  }

  return (
    <div className="col-md-4 p-2">
      <div
        className="card card-body video-card animate__animated animate__backInUp"
        onClick={() => history.push(`/actualizar/${video._id}`)}
      >
        <div className="d-flex justify-content-between">
          <h5>{video.title}</h5>
          <span className="text-danger" onClick={() => video._id && deleteVideoById(video._id)}>X</span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
