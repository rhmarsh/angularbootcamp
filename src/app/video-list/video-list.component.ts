import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Video } from '../types';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Input() selectedVideo: Video;
  @Output() videoSelected =  new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {
  }

  selectVideo(video: any) {
    //this.selectedVideo = video;
    this.videoSelected.emit(video);
  }

}