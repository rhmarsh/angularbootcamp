import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmbeddedVideoComponent } from './embedded-video/embedded-video.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ViewBreakdownComponent } from './view-breakdown/view-breakdown.component';
import { ViewFilterComponent } from './view-filter/view-filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppState, VideoListReducer, SelectedVideoIDReducer, FilterReducer } from './state';
import { EffectsService } from './effects.service';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes), 
    StoreModule.forRoot<AppState>({videoList: VideoListReducer, selectedVideoId: SelectedVideoIDReducer, viewFilter: FilterReducer}), EffectsModule.forRoot([EffectsService])],
  declarations: [ AppComponent, HelloComponent, EmbeddedVideoComponent, VideoListComponent, ViewBreakdownComponent, ViewFilterComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
