import { Action } from "@ngrx/store";
import { VideosRetrieved, SelectedVideoIDReducer } from "./state";

describe('the reducers of the app', () => {
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
    });
});