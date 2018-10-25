import { TestBed } from "@angular/core/testing";
import { VideoService } from "./video.service";
import { Video } from "./types";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('The video service', () => {
    let controller: HttpTestingController;
    let videoService: VideoService;
    let data: Video[];
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [VideoService],
            imports: [HttpClientTestingModule]
        });
        controller = TestBed.get(HttpTestingController);
        videoService = TestBed.get(VideoService);
        data = [{
            author: 'testing',
            id: 'abc',
            title: 'unit testing',
            viewDetails: []
        }, {
            author: 'testing2',
            id: 'abcd',
            title: 'unit testing2',
            viewDetails: []
        }];
    });

    

    it('should not get the data more than once', () => {
        const obs = videoService.getVideos();
        let ans: Video[], ans2: Video[];
        obs.subscribe(d => ans = d);
        obs.subscribe(d => ans2 = d);
        const req = controller.expectOne('https://api.angularbootcamp.com/videos');
        expect(req.request.method).toBe('GET');
        req.flush(data);
        expect(ans).toBe(data);
        expect(ans2).toBe(data);
        controller.verify();
    });

    it('should retrieve two videos in parallel', () => {
        let ans: Video[];
        videoService.getTwoVideos().subscribe(d => ans = d);
        const req1 = controller.expectOne('https://api.angularbootcamp.com/videos/JPuqluYYa-o');
        const req2 = controller.expectOne('https://api.angularbootcamp.com/videos/cxqRijt9LbQ');
        req1.flush(data[0]);
        expect(ans).toBeUndefined();
        req2.flush(data[1]);
        expect(ans).toEqual(data);
    });
});