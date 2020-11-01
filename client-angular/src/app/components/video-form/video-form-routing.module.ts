import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoFormComponent } from './video-form.component';

const routes: Routes = [{ path: '', component: VideoFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoFormRoutingModule { }
