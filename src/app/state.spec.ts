import { Action } from "@ngrx/store";
import { VideosRetrieved, SelectedVideoIDReducer, SetSelectedVideo, VideoListReducer } from "./state";


describe('the reducers of the app', () => {
    describe('the video list reducer', () => {
        it('should init when it gets a retrieved action', () => {
            const initialState = undefined,
            expectedList = [{
                author: 'test',
                id: 'abc',
                title: 'test',
                viewDetails: []
            }, {
                author: 'not used',
                id: 'def',
                title: 'should not be selected',
                viewDetails: []
            }],
            action = new VideosRetrieved([{
                author: 'test',
                id: 'abc',
                title: 'test',
                viewDetails: []
            }, {
                author: 'not used',
                id: 'def',
                title: 'should not be selected',
                viewDetails: []
            }]);
            expect(VideoListReducer(initialState, action)).toEqual(expectedList);
        })
    })
    describe('the selected video id reducer', () => {
        it('should init when it gets a video retrieved action', () => {
            const initialState = undefined,
            expectedId = 'abc',
            action: Action = new VideosRetrieved([{
                author: 'test',
                id: 'abc',
                title: 'test',
                viewDetails: []
            }, {
                author: 'not used',
                id: 'def',
                title: 'should not be selected',
                viewDetails: []
            }]);
            expect(SelectedVideoIDReducer(initialState, action)).toBe(expectedId);
        });
        it('should update when video selected', () => {
            const initialState = 'def',
            action = new SetSelectedVideo('abc');
            expect(SelectedVideoIDReducer(initialState, action)).toBe(action.id);
        });
        it('should return passed ID', () => {
            const initialState = 'def',
            action = new SetSelectedVideo('abc'),
            expectedId = 'abc',
            action2: Action = new VideosRetrieved([{
                author: 'test',
                id: 'abc',
                title: 'test',
                viewDetails: []
            }, {
                author: 'not used',
                id: 'def',
                title: 'should not be selected',
                viewDetails: []
            }]);
            expect(SelectedVideoIDReducer(initialState, action)).toBe(action.id);
            expect(SelectedVideoIDReducer(action.id, action2)).toBe(action.id);
        })
        it('should return passed in ID', () => {
            const initialState = 'def',
            action: Action = {type:'abc'};
            expect(SelectedVideoIDReducer(initialState, action)).toBe(initialState);
        })
    });
});