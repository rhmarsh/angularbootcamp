import { ElementFinder, browser } from "protractor";

export class VideoListComponentPO {
    constructor(private el: ElementFinder) { }

    getSelectedVideo() {
        return this.el.$('li.selected').getText();
    }

    selectVideo(i: number) {
        //return browser.actions().mouseMove(this.el.$$('a').get(i)).click().perform();
        return this.el.$$('a').get(i).click();
      }
}