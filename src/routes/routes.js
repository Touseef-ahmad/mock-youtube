import React from 'react';
import { Route } from 'react-router-dom';
// components
import { TopVideos } from '../pages/top-videos';
import { VideoPlayerPage } from '../pages/video-detail';
import { SearchResultsPage } from '../pages/search-results';
// constants
import { ROUTE_NAMES } from './routes-name';

export const Routes = () => (
  <>
    <Route exact path={ROUTE_NAMES.TOP_VIDEOS_PAGE_PATH} component={TopVideos} />
    <Route exact path={ROUTE_NAMES.WATCH_VIDEO_PAGE_PATH} component={VideoPlayerPage} />
    <Route exact path={ROUTE_NAMES.SEARCH_RESULT_PAGE_PATH} component={SearchResultsPage} />
  </>
);
