import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchTermList from './components/search_term_list';

const API_KEY = 'AIzaSyAuCg2VIhNBsSmh6AsHSRKHuZnHoA9vZ9s';


class App extends Component {

  constructor(props) {
  // constructor runs to initialize app and prepopulate state with search results
    super(props);
    this.state = {
      videoResults: [],
      selectedVideo: null,
      searchTerms: ['windsurfing'],
      defaultSearch: 'windsurfing',
      activeTerm: 'windsurfing',
    };
    this.videoSearch(this.state.defaultSearch);
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videoResults => {
      this.setState({
        videoResults: videoResults,
        selectedVideo: videoResults[0],
        activeTerm: term,
      });
    });
  }

  updateTerms(term) {
    console.log(term);
    console.log(this.state.searchTerms)
    if (this.state.searchTerms.includes(term)) {
      return;
    }
    let updatedTerms = this.state.searchTerms.concat(term);
    this.setState({searchTerms: updatedTerms});
  }

  render() {
    const debouncedVideoSearch = _.debounce((term) => {
      this.updateTerms(term);
      this.videoSearch(term);
    }, 500)
    return (
      <div>
        <SearchBar onSearchTermChange={debouncedVideoSearch} defaultSearch={this.state.defaultSearch} activeTerm={this.state.activeTerm} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videoResults}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
        <SearchTermList
          searchTerms={this.state.searchTerms}
          onTermClick={clickedTerm => {
            console.log('on term click handler')
            console.log(clickedTerm)
            this.videoSearch(clickedTerm)
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
