import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have default selected video', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Welcome to workshop-app!');
    expect(page.getSelectedVideo()).toEqual('Angular Observable Data Flow - Kyle Cordes');
    //expect(page.getEmbeddedVideo()).toEqual('Video with id JPuqluYYa-o selected.');
  });

  it('should have default selected video in embedded video', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Welcome to workshop-app!');
    expect(page.getSelectedVideo()).toEqual('Angular Observable Data Flow - Kyle Cordes');
    expect(page.getEmbeddedVideo()).toEqual('Video with id JPuqluYYa-o selected.');
  });

  it('should change selected video', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Welcome to workshop-app!');
    expect(page.getSelectedVideo()).toEqual('Angular Observable Data Flow - Kyle Cordes');
    //expect(page.getEmbeddedVideo()).toEqual('Video with id JPuqluYYa-o selected.');
    page.videoList.selectVideo(1);
    expect(page.getSelectedVideo()).toEqual('Angular Performance Checklist - Paul Spears');
    //expect(page.getEmbeddedVideo()).toEqual('Video with id cxqRijt9LbQ selected.');
  });

  it('should change selected video in embedded video', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Welcome to workshop-app!');
    expect(page.getSelectedVideo()).toEqual('Angular Observable Data Flow - Kyle Cordes');
    expect(page.getEmbeddedVideo()).toEqual('Video with id JPuqluYYa-o selected.');
    page.videoList.selectVideo(1);
    expect(page.getSelectedVideo()).toEqual('Angular Performance Checklist - Paul Spears');
    expect(page.getEmbeddedVideo()).toEqual('Video with id cxqRijt9LbQ selected.');
  });


});
