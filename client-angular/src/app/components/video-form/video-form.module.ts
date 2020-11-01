import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoFormRoutingModule } from './video-form-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    VideoFormRoutingModule
  ]
})
export class VideoFormModule { }
