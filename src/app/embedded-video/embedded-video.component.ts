import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'embedded-video',
  templateUrl: './embedded-video.component.html',
  styleUrls: ['./embedded-video.component.css']
})
export class EmbeddedVideoComponent implements OnInit {
  @Input() videoId: number;
  constructor() { }

  ngOnInit() {
  }

}