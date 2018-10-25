import { Action } from '@ngrx/store';
import { Filter, Video } from './types';

export interface AppState {
  selectedVideoId: string;
  videoList: Video[];
  viewFilter: Filter;
}

const VIDEOS_RETRIEVED = 'VIDEOS_RETRIEVED';
export class VideosRetrieved implements Action {
  type = VIDEOS_RETRIEVED;
  constructor(readonly videos: Video[]) {}
}

export const ADD_VIDEO = 'ADD_VIDEO';
export class AddVideo implements Action {
  type = ADD_VIDEO;
  constructor(readonly video: Video) {}
}

export const ADD_VIDEO_ATTEMPT = 'ADD_VIDEO_ATTEMPT';
export class AddVideoAttempt implements Action {
  type = ADD_VIDEO_ATTEMPT;
  constructor(readonly title: string, readonly author: string) {}
}

export const ADD_VIDEO_FAILURE = 'ADD_VIDEO_FAILURE';
export class AddVideoFailure implements Action {
  type = ADD_VIDEO_FAILURE;
  constructor(readonly title: string, readonly author: string, readonly reason: string) { }
}

export function VideoListReducer(prevList: Video[] = [], action: Action) {
  console.log(action);
  switch (action.type) {
    case VIDEOS_RETRIEVED:
      return (action as VideosRetrieved).videos;
    case ADD_VIDEO:
      return [...prevList, (action as AddVideo).video];
    default:
      return prevList;
  }
}

const SET_SELECTED_VIDEO = 'SET_SELECTED_VIDEO';
export class SetSelectedVideo implements Action {
  type = SET_SELECTED_VIDEO;
  constructor(readonly id: string) {}
}

export function SelectedVideoIDReducer(prevId: string, action: Action) {
  switch (action.type) {
    case SET_SELECTED_VIDEO:
      return (action as SetSelectedVideo).id;
    case VIDEOS_RETRIEVED:
      if (!prevId) {
        return (action as VideosRetrieved).videos[0].id;
      } else {
        return prevId;
      }
    default:
      return prevId;
  }
}

const SET_FILTER = 'SET_FILTER';
export class SetFilter implements Action {
  type = SET_FILTER;
  constructor(readonly filter: Filter) {}
}

export const defaultFilter: Filter = {
      region: 'All',
      minDate: '2005-01-01',
      maxDate: '2019-01-01',
      minors: true,
      adults: true,
      middleAges: true,
      seniors: true
};

export function FilterReducer(prevFilter: Filter = defaultFilter, action: Action) {
  switch (action.type) {
    case SET_FILTER:
      return (action as SetFilter).filter;
    default:
      return prevFilter;
  }
}



