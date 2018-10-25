import { ElementFinder, browser } from "protractor";

export class EmbeddedVideoComponentPO {
    constructor(private el: ElementFinder) { }

    getEmbeddedVideo() {
        return this.el.$('p').getText();
    }


}