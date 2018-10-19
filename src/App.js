import _ from 'lodash';
import React, { Component } from 'react';
import SerarchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSsearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import './App.css'
const API_KEY = 'AIzaSyBV7PH-uBmd94CAXlM6hsjXmfx9n5TsLt8'
YTSsearch({ key: API_KEY, term: 'surfboards' }, function (data) {
    console.log(data);
});
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSerach('surfboard');
    }
    videoSerach(term) {
        YTSsearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSerach = _.debounce((term)=> {this.videoSerach(term)},800)
        return (
            <div>
                <SerarchBar onSerachTermChange={videoSerach} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                />
            </div>
        )
    }
}
export default App