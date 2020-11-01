import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent
  },
  {
    path: 'nuevo-video',
    loadChildren: () => import('./components/video-form/video-form.module').then(m => m.VideoFormModule)
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./components/video-form/video-form.module').then(m => m.VideoFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
