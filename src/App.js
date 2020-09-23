import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { TopVideos } from './pages/top-videos';
import { VideoPlayerPage } from './pages/video-player';
import { SearchResultPage } from './pages/search-result';
import { TOP_VIDEOS_PAGE_PATH, WATCH_VIDEO_PAGE_PATH, SEARCH_RESULT_PAGE_PATH } from './routes';

const theme = {
  background: 'white',
  primary: 'blue',
};

export const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route exact path={TOP_VIDEOS_PAGE_PATH} component={TopVideos} />
      <Route exact path={WATCH_VIDEO_PAGE_PATH} component={VideoPlayerPage} />
      <Route exact path={SEARCH_RESULT_PAGE_PATH} component={SearchResultPage} />
    </Router>
  </ThemeProvider>
);
