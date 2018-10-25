import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Video } from './types';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl = 'https://api.angularbootcamp.com';
  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl + '/videos').pipe(shareReplay(1));
  }

  getTwoVideos() {
    return combineLatest(
      this.http.get<Video>(this.apiUrl + '/videos/JPuqluYYa-o'),
      this.http.get<Video>(this.apiUrl + '/videos/cxqRijt9LbQ'),
      (v1, v2) => [v1, v2]
      )
  }

}