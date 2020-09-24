import axios from 'axios';
import { YOUTUBE_SEARCH_API_URL } from './endpoints';
import { YOUTUBE_API_KEY } from './api-keys';

export const fetchSearchResults = async query => {
  try {
    return await axios.get(YOUTUBE_SEARCH_API_URL, {
      params: {
        part: 'snippet',
        q: query,
        key: YOUTUBE_API_KEY,
        type: 'video',
      },
    });
  } catch (err) {
    return { error: true };
  }
};

export const fetchTopVideos = async () => {
  try {
    return await axios.get(YOUTUBE_SEARCH_API_URL, {
      params: {
        part: 'snippet',
        key: YOUTUBE_API_KEY,
        chart: 'mostPopular',
        regionCode: 'PK',
        maxResults: 20,
      },
    });
  } catch (err) {
    return { error: true };
  }
};

export const fetchRelatedVideos = async videoId => {
  try {
    return await axios.get(YOUTUBE_SEARCH_API_URL, {
      params: {
        part: 'snippet',
        key: YOUTUBE_API_KEY,
        type: 'video',
        relatedToVideoId: videoId,
      },
    });
  } catch (err) {
    return { error: true };
  }
};
