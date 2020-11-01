import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent implements OnInit {
  public params: Params;
  public video: Video = {
    title: '',
    description: '',
    url: ''
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly videoService: VideoService
  ) { }

  ngOnInit(): void {
    this.params = this.route.snapshot.params;

    if (this.params.id) {
      this.videoService.getVideo(this.params.id).subscribe((res: Video) => {
        this.video = res;
      });
    }
  }

  public createVideo(video: NgForm): void {
    if (!this.params.id) {
      this.videoService.createVideo(video.value).subscribe((res) => {
        this.router.navigateByUrl('');
      });
    } else {
      this.videoService.updateVideo(this.params.id, video.value).subscribe((res) => {
        this.router.navigateByUrl('');
      });
    }
  }
}
