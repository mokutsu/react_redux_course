import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAuCg2VIhNBsSmh6AsHSRKHuZnHoA9vZ9s';


class App extends Component {

  constructor(props) {
  // constructor runs to initialize app and prepopulate state with search results
    super(props);
    this.state = {
      videoResults: [],
      selectedVideo: null
    };
    YTSearch({key: API_KEY, term: 'windsurfing'}, videoResults => {
      this.setState({
        videoResults: videoResults,
        selectedVideo: videoResults[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videoResults}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
