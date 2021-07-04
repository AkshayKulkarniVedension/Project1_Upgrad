import React from "react";
import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import "semantic-ui-css/semantic.min.css";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { video: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("corptut");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.video}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//AIzaSyBjpgECUCB4IuOSU3R_oUsNYp4fTYJPnhw
