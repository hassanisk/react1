import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDukHK7egd7uvro8WAlL3WzlrdS5Mt_v0k';

// create a new component.. this component should prodice some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'},(videos) => {
      this.setState({ videos });
    });
    }
  render() {
    return (<div>
      <SearchBar />
    </div>);
  }
}

//take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
