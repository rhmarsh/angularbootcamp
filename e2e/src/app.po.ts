import { browser, by, element } from 'protractor';
import { VideoListComponentPO } from './video-list.component.po';
import { EmbeddedVideoComponentPO } from './embedded-video.component.po';

export class AppPage {
  videoList = new VideoListComponentPO(element(by.css('video-list')));
  embeddedVideo = new EmbeddedVideoComponentPO(element(by.css('embedded-video')));
  navigateTo() {
    return browser.get('/');
  }

/*   getParagraphText() {
    return element(by.css('app-root h1')).getText();
  } */
  getSelectedVideo() {
    return this.videoList.getSelectedVideo();
  }

  selectVideo(i: number) {
    return this.videoList.selectVideo(i);
  }

  getEmbeddedVideo() {
    return this.embeddedVideo.getEmbeddedVideo();
  }

  


}
