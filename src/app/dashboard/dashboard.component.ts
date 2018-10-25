import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators'
import { Video, Filter, View } from '../types';
import { AppState, VideosRetrieved, SetSelectedVideo , SetFilter, AddVideoAttempt} from '../state';
import { VideoService } from '../video.service';

function getSelectedVideo(s: AppState) {
  return s.videoList.find(v => v.id === s.selectedVideoId);
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  videos: Observable<Video[]>;
  selectedVideo: Observable<Video>;
  filteredViews: Observable<View[]>;
  //filter: Filter;
  
  constructor(service: VideoService, private router: Router, ar: ActivatedRoute, private store: Store<AppState>) {
    this.videos = store.select(s => s.videoList);
    this.selectedVideo = store.select(getSelectedVideo);
    this.filteredViews = store.select(s => {
      let filteredList = [];
      const sv = getSelectedVideo(s);
      if (!sv) {
        return [];
      } else if (!s.viewFilter) {
        return sv.viewDetails;
      }

    if (s.viewFilter.minors) {
      sv.viewDetails.filter(view => view.age <= 17).forEach(entry => filteredList.push(entry));
    }
    if (s.viewFilter.adults) {
      sv.viewDetails.filter(view => view.age > 17 && view.age <= 40).forEach(entry => filteredList.push(entry));
    }
    if (s.viewFilter.middleAges) {
      sv.viewDetails.filter(view => view.age > 40 && view.age <= 60).forEach(entry => filteredList.push(entry));
    }
    if (s.viewFilter.seniors) {
      sv.viewDetails.filter(view => view.age > 60).forEach(entry => filteredList.push(entry));
    }
    //if (filteredList.length > 0 && ) {
      return filteredList.filter(view => (s.viewFilter.region === 'All' || s.viewFilter.region === view.region));
    //} else {
      //return this.views.filter(view => (this.filter.region === 'All' || this.filter.region === view.region));
    //}
      //return sv.viewDetails.filter(v => s.viewFilter.region === 'All' || s.viewFilter.region === v.region);
    });
  }

  selectVideo(video: Video) {
    this.router.navigate([], { queryParams: {videoId: video.id}, queryParamsHandling: 'merge' });
  }

  setFilter(f: Filter) {
    this.store.dispatch(new SetFilter(f));
  }

  addVideo() {
    this.store.dispatch(new AddVideoAttempt('Auto Generated Video', 'A Robot'))
  }

}


