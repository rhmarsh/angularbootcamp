import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatNumber } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { VideoService } from './video.service';
import { VideosRetrieved, SetSelectedVideo, ADD_VIDEO_ATTEMPT, AddVideoAttempt, AddVideo, AddVideoFailure } from './state';

let id = 0;
let view = [];
@Injectable()
export class EffectsService {
  @Effect() getVideos = this.service.getVideos().pipe(map(vl => new VideosRetrieved(vl)));
  @Effect() getVideoID = this.ar.queryParams.pipe(map(qp => qp['videoId'])).pipe(map(id => new SetSelectedVideo(id)));
  @Effect() processAddVideo = this.actions.ofType(ADD_VIDEO_ATTEMPT).pipe(switchMap((a: AddVideoAttempt): Observable<Action> => {
    view = [];
    if (Math.random() > .5) {
      id++;
      view.push({age:formatNumber(Math.random()*100, 'en-US', '1.0-0'), region: "Asia", date:"2018-10-25"});
      return of(new AddVideo({
        id: id+'',
        author: a.author,
        title: a.title,
        viewDetails: view
      }))
    } else {
      alert("Video add rejected");
      return of(new AddVideoFailure(a.title, a.author, "Not accepted"));
    }
  }));
  
  constructor(private service: VideoService, private ar: ActivatedRoute, private actions: Actions) { }

}