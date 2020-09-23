import axios from 'axios';
import { YOUTUBE_SEARCH_API_URL } from './endpoints';
import { YOUTUBE_API_KEY } from './api-keys';

export const fetchSearchResults = async query => {
  return axios.get(YOUTUBE_SEARCH_API_URL, {
    params: {
      part: 'snippet',
      q: query,
      key: YOUTUBE_API_KEY,
      type: 'video',
    },
  });
};

export const fetchTopVideos = async () => {
  return axios.get(YOUTUBE_SEARCH_API_URL, {
    params: {
      part: 'snippet',
      key: YOUTUBE_API_KEY,
      chart: 'mostPopular',
      regionCode: 'PK',
      maxResults: 20,
    },
  });
};

export const fetchRelatedVideos = async videoId => {
  return axios.get(YOUTUBE_SEARCH_API_URL, {
    params: {
      part: 'snippet',
      key: YOUTUBE_API_KEY,
      type: 'video',
      relatedToVideoId: videoId,
    },
  });
};
