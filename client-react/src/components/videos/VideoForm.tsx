import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Video } from "../../models/Video";
import { createVideo, getVideo, updateVideo } from "../../services/video";

interface Params {
  id?: string;
}

const VideoForm = () => {
  const history = useHistory();
  const params = useParams<Params>();
  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVideo({ ...video, [event.target.name]: event.target.value });
  };
  const createVideoSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!params.id) {
      await createVideo(video);
      toast.success("Nuevo video agregado");
      setVideo(initialState);
    } else {
      await updateVideo(params.id, video);
    }

    history.push("/");
  };
  const getVideoById = async (id: string) => {
    const res = await getVideo(id);
    const { title, description, url } = res.data;

    setVideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) {
      getVideoById(params.id);
    }
  }, [params.id]);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo video</h3>
            <form onSubmit={createVideoSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  onChange={handleInputChange}
                  value={video.title}
                  placeholder="Escriba un titulo para el video"
                  className="form-control"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  onChange={handleInputChange}
                  value={video.url}
                  placeholder="https://www.youtube.com"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  onChange={handleInputChange}
                  value={video.description}
                  rows={3}
                  className="form-control"
                  placeholder="Escriba una descripcion"
                ></textarea>
              </div>
              {params.id ? (
                <button className="btn btn-primary">Actualizar video</button>
              ) : (
                <button className="btn btn-primary">Crear video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
