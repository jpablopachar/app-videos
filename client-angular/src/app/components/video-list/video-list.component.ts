import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-list',
  template: `
    <div class="row">
      <div class="col-md-4 p-2" *ngFor="let video of videoList|async">
        <div class="card card-body video-card" (click)="updateVideo(video._id)">
          <div class="d-flex justify-content-between">
            <h5>{{ video.title }}</h5>
            <span (click)="deleteVideo(video._id)">X</span>
          </div>
          <p>{{ video.description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .video-card:hover {
      border: 1px solid #333333;
      cursor: pointer;
    }
  `]
})
export class VideoListComponent implements OnInit {
  public videoList: Observable<Video[]>;

  constructor(
    private readonly router: Router,
    private readonly videoService: VideoService
  ) { }

  ngOnInit(): void {
    this.getVideos();
  }

  public getVideos(): void {
    this.videoList = this.videoService.getVideos();
  }

  public updateVideo(id: string): void {
    this.router.navigate(['/actualizar', id]);
  }

  public deleteVideo(id: string): void {
    this.videoService.deleteVideo(id).subscribe((res) => {
      this.getVideos();
    });
  }
}
