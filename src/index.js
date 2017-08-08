import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDukHK7egd7uvro8WAlL3WzlrdS5Mt_v0k';

// create a new component.. this component should prodice some html
const App = () => {
  return (<div>
    <SearchBar />
  </div>);
}


//take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
