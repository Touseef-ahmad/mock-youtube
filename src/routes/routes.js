import React from 'react';
import { Route } from 'react-router-dom';
// components
import { HomePage } from '../pages/home-page';
import { VideoDetailPage } from '../pages/video-detail-page';
import { SearchResultsPage } from '../pages/search-results';
// constants
import { ROUTE_NAMES } from './route-names';

export const Routes = () => (
  <>
    <Route exact path={ROUTE_NAMES.TOP_VIDEOS_PAGE_PATH} component={HomePage} />
    <Route exact path={ROUTE_NAMES.WATCH_VIDEO_PAGE_PATH} component={VideoDetailPage} />
    <Route exact path={ROUTE_NAMES.SEARCH_RESULT_PAGE_PATH} component={SearchResultsPage} />
  </>
);
