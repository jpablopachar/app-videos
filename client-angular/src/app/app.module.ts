import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoService } from './services/video.service';
import { RouterModule } from '@angular/router';
import { VideoFormComponent } from './components/video-form/video-form.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoFormComponent,
    VideoListComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
