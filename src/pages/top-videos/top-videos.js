import React from 'react';
import { Header, VideoThumbnail } from '../../components';
import { fetchTopVideos } from '../../api';
// import { DUMMY_DATA } from '../../api/dummy-data';

class TopVideos extends React.Component {
  state = {
    results: { items: [] },
  };

  async componentDidMount() {
    const results = await fetchTopVideos();
    this.setState({ results: results.data });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {results.items.map(({ snippet, id }) => (
            <VideoThumbnail
              flexDirection='column'
              width='20%'
              videoId={id.videoId}
              imageUrl={snippet.thumbnails.medium.url}
              title={snippet.title}
            />
          ))}
        </div>
      </div>
    );
  }
}

export { TopVideos };
