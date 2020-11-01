import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video';

const URL_API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private readonly http: HttpClient) { }

  public getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${URL_API}/videos`);
  }

  public getVideo(id: string): Observable<Video> {
    return this.http.get<Video>(`${URL_API}/videos/${id}`);
  }

  public createVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(`${URL_API}/videos`, video);
  }

  public updateVideo(id: string, video: Video): Observable<Video> {
    return this.http.put<Video>(`${URL_API}/videos/${id}`, video);
  }

  public deleteVideo(id: string): Observable<any> {
    return this.http.delete<any>(`${URL_API}/videos/${id}`);
  }
}
